<template>
    <div id="add-product">
        <div class="container">
            <p v-if="message.length" class="message">{{ message }}</p>
            <a-form :model="formState" name="basic" layout="vertical" autocomplete="off" @finish="onFinish"
                @finishFailed="onFinishFailed">
                <a-form-item label="Name Blogs" name="title"
                    :rules="[{ required: true, message: 'This field is required' }]">
                    <a-input v-model:value="formState.title" placeholder="Enter Title Blogs" />
                </a-form-item>

                <a-form-item name="categories" label="Categories" :rules="[
                  {
                    required: true,
                    message: 'This field is required',
                    type: 'array',
                  },
                ]">
                    <a-select mode="multiple" placeholder="Select category" v-model:value="formState.categories"
                        :options="categories">
                    </a-select>
                </a-form-item>

                <a-form-item label="Description" name="description"
                    :rules="[{ required: true, message: 'This field is required' }]">
                    <QuillEditor v-model:content="content" theme="snow" toolbar="#custom-toolbar">
                        <template #toolbar>
                            <div id="custom-toolbar">
                                <select class="ql-size">
                                    <option value="small"></option>
                                    <option selected></option>
                                    <option value="large"></option>
                                    <option value="huge"></option>
                                </select>
                                <select class="ql-header">
                                    <option :value="1"></option>
                                    <option :value="2"></option>
                                    <option :value="3"></option>
                                    <option :value="4"></option>
                                    <option :value="5"></option>
                                    <option :value="6"></option>
                                    <option selected></option>
                                </select>
                                <button class="ql-bold"></button>
                                <button class="ql-italic"></button>
                                <button class="ql-underline"></button>
                                <button class="ql-strike"></button>
                                <button class="ql-script" value="sub"></button>
                                <button class="ql-script" value="super"></button>
                                <select class="ql-align">
                                    <option selected></option>
                                    <option value="center"></option>
                                    <option value="right"></option>
                                    <option value="justify"></option>
                                </select>
                                <button class="ql-list" value="ordered"></button>
                                <button class="ql-list" value="bullet"></button>
                                <button class="ql-blockquote"></button>
                                <button class="ql-code-block"></button>
                                <button class="ql-link"></button>
                                <button class="ql-image"></button>
                                <button id="your-button" @click="setContent()">Save</button>
                            </div>
                        </template>
                    </QuillEditor>
                    <!-- <a-textarea v-model:value="formState.description" placeholder="Enter product description"
                        :rows="4" /> -->
                </a-form-item>

                <a-upload v-model:file-list="fileList" accept=".jpg, .jpeg, .png" list-type="picture" :multiple="true"
                    :before-upload="beforeUpload" class="avatar-uploader" @remove="handleRemove">
                    <p style="margin: 0 0 10px 0">
                        <span style="
                  display: inline-block;
                  margin: 0 5px 0 0;
                  vertical-align: middle;
                "><img src="@/assets/images/asterik.png" width="5" alt="asterik" /></span>Upload Photo
                    </p>
                    <div class="upload-file">
                        <div class="img">
                            <img src="@/assets/images/cloud-upload.png" alt="icon" />
                        </div>
                        <p>Click to upload images</p>
                    </div>
                </a-upload>
                <p style="color: red">{{ msgUpload }}</p>

                <a-form-item>
                    <p style="text-align: center">
                        <a-button type="primary" html-type="submit" class="btn-create-product space-right">
                            <router-link to="/blogs"> Back to Blogs</router-link>
                        </a-button>
                        <a-button type="primary" html-type="submit" class="btn-create-product">
                            <sync-outlined spin v-if="loading" />Create New
                        </a-button>
                    </p>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>
  
<script lang="ts">
import type { UploadChangeParam, UploadProps } from "ant-design-vue";
import { computed, defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { SyncOutlined } from "@ant-design/icons-vue";
import BlogsService from '@/api/BlogsService'
import CategoriesService from '@/api/CategoriesService'
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { QuillEditor } from "@vueup/vue-quill";
import "./AddBlogs.scss";
import { toastSuccess, toastError } from "@/utils/toast"

interface FormState {
    title: string;
    description: string;
    categories: [];
}

const OPTIONS = [
    { value: "1", label: "Blue" },
    { value: "2", label: "Green" },
    { value: "3", label: "Lightblue" },
];

export default defineComponent({
    components: {
        SyncOutlined,
        QuillEditor,
    },

    created() {
        CategoriesService.get().then((res) => {
            this.categories = res?.map((item) => ({
                value: item.id,
                label: item.name,
            }));
        });
    },
    setup() {
        const setContent = (e) =>{
            console.log(e);
            console.log('tuancan');
        }
        const msgUpload = ref<string>("");
        const categories = ref<any>([]);
        const loading = ref<boolean>(false);
        const fileList = ref<any>([]);
        const message = ref<string>("");
        const router = useRouter();
        const formState = reactive<FormState>({
            title: "",
            description: "",
            categories: [],
        });
        const filteredOptions = computed(() =>
            OPTIONS.filter((o) => !formState.categories.includes(o.value))
        );

        const beforeUpload: UploadProps["beforeUpload"] = (file) => {
            fileList.value = [...fileList.value, file];

            if (!!fileList.value.length) {
                msgUpload.value = "";
            }
            return false;
        };

        const handleRemove: UploadProps["onRemove"] = (file) => {
            const index = fileList.value.indexOf(file);
            const newFileList = fileList.value.slice();
            newFileList.splice(index, 1);
            fileList.value = newFileList;
        };

        const onFinish = (values) => {

            if (!fileList.value.length) {
                msgUpload.value = "This field is required";
            } else {
                loading.value = true;
                const formData = new FormData();

                fileList.value.forEach((file: any) => {
                    formData.append("files", file?.originFileObj as any);
                });
                let categoryArr = [];
                if (values?.categories != undefined) {
                    values?.categories.forEach(element => {
                        categoryArr.push({ id: element })
                    });
                }

                const jsonFile = {
                    title: values?.title?.trim(),
                    description: values?.description?.trim(),
                    categories: categoryArr,
                };
                const postData = JSON.stringify(jsonFile);
                formData.append("jsonFile", postData);

                BlogsService
                    .postBlogs(formData)
                    .then((res) => {
                        setTimeout(() => {
                            loading.value = false;
                            toastSuccess("Create product successfully!")
                        }, 500);
                        setTimeout(() => {
                            router.push('/blogs');
                        }, 2000);
                    })
                    .catch((err) => {
                        toastError(err.message)
                        setTimeout(() => {
                            loading.value = false;
                        }, 500);
                    });
            }
        };

        const onFinishFailed = (errorInfo: any) => {
            if (!fileList.value.length) {
                msgUpload.value = "This field is required";
            }
        };
        return {
            setContent,
            formState,
            onFinish,
            onFinishFailed,
            message,
            beforeUpload,
            handleRemove,
            filteredOptions,
            loading,
            fileList,
            msgUpload,
            categories,
        };
    },
});
</script>
  