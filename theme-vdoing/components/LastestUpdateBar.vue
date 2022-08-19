<template>
  <div class="latestupdate-wrapper card-box">
    <router-link :to="moreArticle" class="title iconfont icon-shizhong"> 最近更新</router-link>

    <div class="articles">
      <router-link class="link" :to="item.path" v-for="(item, index) in topPublishPosts" :key="index">
        <span class="link-title" :title="item.title">{{ item.title }}</span>
        <span class="link-date">{{ getDate(item) }}</span>
      </router-link>
      <router-link :to="moreArticle" class="link">更多...</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "LastestUpdateBar",
  props: {
    length: {
      type: [String, Number],
      default: 3
    },
    moreArticle: {
      type: String,
      default: "/archives/"
    }
  },
  data() {
    return {
      posts: [],
      currentPath: ""
    };
  },
  created() {
    this.posts = this.$site.pages;
    this.currentPath = this.$page.path;
  },
  computed: {
    topPublishPosts() {
      return this.$sortPostsByDate
        ? this.$sortPostsByDate
          .filter(post => {
            const { path } = post;
            return path !== this.currentPath;
          })
          .slice(0, this.length)
        : [];
    }
  },
  methods: {
    getNum(index) {
      return index < 9 ? "0" + (index + 1) : index + 1;
    },
    getDate(item) {
      return item.frontmatter.date
        ? item.frontmatter.date.split(" ")[0].slice(5, 10)
        : "";
    }
  },
  watch: {
    $route() {
      this.currentPath = this.$page.path;
    }
  }
};
</script>

<style lang='stylus'>
.latestupdate-wrapper {
  .title {
    padding 0 0.95rem
    color var(--textColor)
    opacity 0.9
    font-size 1.2rem
  }

  .articles {
    margin-top 0.6rem
    .link {
      border-left 2px solid transparent
      padding 8px 0.95rem 7px 0.95rem
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-content: center;
      justify-content: space-between;
      align-items: center;

      color: var(--textColor);
      opacity: 0.8;
      font-size: 0.95rem;
      white-space: nowrap;
      transition all 0.2s;

      @media (max-width: $MQMobile) {
        font-weight: 400;
      }

      &:not(.active):hover {
        color $accentColor
        background #f8f8f8
        border-color $accentColor
        opacity 0.8
      }

      // &:hover {
      //   color: $accentColor;
      //   .link-title{
      //     padding-left: 0.4rem;
      //   }
      //   transition: all 0.3s;
      // }

      &.active {
        background: $accentColor;
        color: var(--mainBg);
        padding-left: 0.8rem;
        border-radius: 3px;
      }

      .link-title{
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }


}
</style>