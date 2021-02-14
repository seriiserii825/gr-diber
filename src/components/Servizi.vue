<template>
      <section class="services-block">
        <div class="services-block__wrap">
          <div
            class="services-block__item"
            v-for="item in $static.servizi.edges"
            :key="item.id"
          >
          <AdaptiveImage
          :desktopSrc="item.node.featuredMedia.mediaDetails.sizes.full.sourceUrl"
          :tabletSrc="item.node.featuredMedia.mediaDetails.sizes.tablet.sourceUrl"
          :mobileSrc="item.node.featuredMedia.mediaDetails.sizes.mobile.sourceUrl"
          />
            <footer class="services-block__footer">
              <h2 class="title">{{ item.node.title }}</h2>
              <div class="services-block__text" v-html="item.node.content"></div>
            </footer>
          </div>
        </div>
      </section>
</template>
<static-query>
query {
  servizi: allWordPressServizi {
    edges {
      node {
        id
        title
        content
        featuredMedia {
          mediaDetails {
            sizes {
              full {
                sourceUrl
              }
              tablet {
                sourceUrl
              }
              mobile {
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
}
</static-query>
<script>
export default {

}
</script>
<style lang="scss">
.services-block {
	margin-bottom: 50px;
}
.services-block__title {
	margin-bottom: 20px;
}
.services-block__wrap {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 30px;
}
.services-block__item {
	position: relative;
	height: 580px;
	border: 2px solid #008BCF;
    @media screen and (max-width: 576px) {
         height: 520px;
    }
    @media screen and (max-width: 400px) {
         height: 480px;
    }
	.title {
		text-align: left;
	}
}
.services-block__footer {
	position: absolute;
	bottom: 40px;
	left: 40px;
	right: 40px;
	padding-bottom: 30px;
	border-bottom: 1px dashed #008BCF;
}
.services-block__text {
	max-width: 580px;
}
.services-block__list {
	display: flex;
	flex-wrap: wrap;
	li {
		position: relative;
		margin-right: 20px;
		padding-left: 12px;
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			-webkit-transform: translateY(-50%);
			transform: translateY(-50%);
			left: 0;
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: #fff;
		}
	}
}
@media screen and (max-width: 768px) {
	.services-block__wrap {
		display: block;
		margin: 0 auto 50px;
		max-width: 520px;
	}
	.services-block__item {
		margin-bottom: 30px;
	}
}
</style>