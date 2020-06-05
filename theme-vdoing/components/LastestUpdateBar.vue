<template>
  <div class="latestupdate-wrapper card-box">
    <router-link :to="moreArticle" class="title iconfont icon-clock">最近更新</router-link>

    <div class="articles">
      <router-link :to="item.path" v-for="(item, index) in topPublishPosts" :key="index">
        {{getBriefName(item.title)}}
        <span>{{getDate(item)}}</span>
      </router-link>
      <router-link :to="moreArticle" class="more">更多...</router-link>
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
    },
    charLimits: {
      type: Number,
      default: 11
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
    },
    getBriefName(name) {
      const bytes = name.replace(/[^\u0000-\u00ff]/g, "aa").length;
      return bytes > this.charLimits * 2
        ? name.substring(0, this.charLimits) + "..."
        : name;
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
    color: $accentColor;
    font-size: 1.2rem;
  }

  .articles {
    margin-top: 0.6rem;

    a {
      display: block;
      padding: 0.28rem 0.25rem 0.25rem 0;
      color: var(--textColor);
      opacity: 0.8;
      font-size: 0.95rem;
      position: relative;
      transition: all 0.3s;

      @media (max-width: $MQMobile) {
        font-weight: 400;
      }

      &:hover {
        color: $accentColor;
        padding-left: 0.4rem;
      }

      span {
        float: right;
      }

      &.active {
        background: $accentColor;
        color: var(--mainBg);
        padding-left: 0.8rem;
        border-radius: 3px;
      }
    }
  }
}
</style>
