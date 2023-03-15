export const state = () => ({
  counter: 100,
  fetchedNews: [],
  newsDetail: {}
})

export const getters = {
  getCounter(state) {
    return state.counter
  },
  getDetail: (state) => (id) =>  {
    let result = state.fetchedNews.find(el => el.id === +id)
    console.log(typeof id,result, 'yang ini');
    return result
  }
}

export const mutations = {
  increment(state) {
    console.log('masuk');
    state.counter++
  },
  fetchNews(state, data) {
    state.fetchedNews = data
  },
  fetchDetail(state, data) {
    state.newsDetail = data
  }
}

export const actions = {
  async fetchCounter({ state }) {
    // make request
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  },
  async fetchNews(context) {
    // axios request
    try {
      let data = await this.$axios.$get('https://jakpost.vercel.app/api/category/indonesia/politics/page/1')
      let posts = await Promise.all(
        data.posts.map( async (el, i) => {
          el.id = i+1
          el.slug = el.link.slice(52).replaceAll('/', '+')
          let detail = await this.$axios.$get(el.link)
          el.article = detail.detail_post.post_content
          return el
        })
      )
      context.commit('fetchNews', posts) 
      console.log(posts);
    } catch (err) {
      console.log(err);
    }
  },
  editNews(context, formData) {
    console.log(context, 'ini context');
    console.log(formData, 'ini form data');
  },
}