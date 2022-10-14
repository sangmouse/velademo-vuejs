<template>
  <div id="blog-detail">
    <SlideShow />
    <div class="container">
      <div class="row mt-4 mb-4">
        <div class="col-12 col-sm-12 col-md-9">
          <div class="blog-detail">
            <h1 class="blog-detail__title">Anteposuerit litterarum formas.</h1>
            <div class="card">
              <img
                src="https://cdn.shopify.com/s/files/1/0376/9440/6700/articles/10_1080x.jpg?v=1585986913"
                class="card-img-top"
                alt="..."
              />
              <div class="blog__title">lifestyle</div>
              <div class="blog-article d-flex">
                <span class="blog-article__author">Mr Vela .</span>
                <span class="blog-article__date">Apr 04, 2020</span>
              </div>
              <p class="card-text">
                Diga, Koma and Torus are three kitchen utensils designed for
                Ommo, a new design-oriented brand introduced at the Ambiente
                show in February 2016. Minimalist approach, bright colors,
                stainless steel and matte plastic, abstract shapes and curved
                lines are the defining features of these products designed to be
                extremely functional, user-friendly and fun.
              </p>
              <p>&nbsp;</p>
              <p class="card-text">
                Diga, Koma and Torus are three kitchen utensils designed for
                Ommo, a new design-oriented brand introduced at the Ambiente
                show in February 2016. Minimalist approach, bright colors,
                stainless steel and matte plastic, abstract shapes and curved
                lines are the defining features of these products designed to be
                extremely functional, user-friendly and fun.
              </p>
              <div class="card__quote">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
              </div>
              <img
                src="https://cdn.shopify.com/s/files/1/1573/5553/files/21_Blog-post.jpg?v=1510022321"
                class="card-img-top"
                alt="..."
              />
            </div>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p class="card-text">
              Koma and Torus are two tea infusers, each with an original design
              and a concealed function. Koma has a round base and a long
              stainless steel-trimmed handle which offers a comfortable grip and
              allows.
            </p>
            <p>&nbsp;</p>
            <p class="card-text">
              Koma and Torus are two tea infusers, each with an original design
              and a concealed function. Koma has a round base and a long
              stainless steel-trimmed handle which offers a comfortable grip and
              allows.
            </p>
            <div class="card-post">
              <div class="card-post-sharing d-flex">
                <span>Share:</span>
                <button class="card-post-sharing__btn">Share</button>
                <button class="card-post-sharing__btn">Tweet</button>
              </div>
              <div class="card-post-tag d-flex">
                <span>Tags:</span>
                <p>Apps,</p>
                <p>Conference,</p>
                <p>Developers,</p>
                <p>Enterprise,</p>
                <p>Startups</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-sm-12 col-md-3">
          <SiderBar />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideShow from "@/components/slide-show/SlideShow.vue";
import SiderBar from "@/components/sider-bar/SiderBar.vue";
import "./blog-detail.scss";
export default {
  components: { SiderBar, SlideShow },
};
</script>
