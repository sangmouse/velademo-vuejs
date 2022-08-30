import { notification } from "ant-design-vue";

const toastSuccess = (message: string, description: string) => {
    notification.success({
        message: message,
        description: description,
      });
}

const toastError = (message: string, description: string) => {
    notification.error({
        message: message,
        description: description,
      });
}   

const toastInfo = (message: string, description: string) => {
    notification.info({
        message: message,
        description: description,
      });
}  
const toastWarning = (message: string, description: string) => {
    notification.warning({
        message: message,
        description: description,
      });
}  
const toastOpen = (message: string, description: string) => {
    notification.open({
        message: message,
        description: description,
      });
}  
const toastClose = (message: string) => {
    notification.close(
         message
      );
}  
const toastDestroy = () => {
    notification.destroy();
}  

export {toastSuccess, toastError, toastInfo, toastOpen, toastWarning, toastClose, toastDestroy}