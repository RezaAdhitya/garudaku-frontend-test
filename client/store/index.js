export const state = () => ({
  fetchedNews: [],
  newsDetail: {}
})

export const getters = {

  /* 
    this getter is for getting fetchedNews data based on its id.
    the reason I use getter instead of directly using the state is that it is more reactive,
    thus able to be assigned to the component state for edit purposes
  */ 
  getDetail: (state) => (id) =>  {
    let result = state.fetchedNews.find(el => el.id === +id)
    return result
  }
}

export const mutations = {
  
  // this mutation is to assign fetched data to the state
  // it is best practice to use mutation instead of assigning the state directly
  fetchNews(state, data) {
    state.fetchedNews = data
  },

  // this mutation is to assign news details to the state
  fetchDetail(state, data) {
    state.newsDetail = data
  },

  // this mutation is to replace fetchedNews' element with
  // updated element after edit
  editDetail(state, payload) {
    state.fetchedNews.splice(payload.index, 1, payload.newData)
  }
}

export const actions = {

  // this method is to fetch all news data using axios
  async fetchNews(context) {
    try {
      let data = await this.$axios.$get('https://jakpost.vercel.app/api/category/indonesia/politics/page/1')

      /* 
        method below is to assign id, slug, and article to the fetched data's elements.
        it is done this way because the news and its articles are separated
        and requires another axios get request to obtain.
      */
      let posts = await Promise.all(
        data.posts.map( async (el, i) => {

          // assigning id and slug
          el.id = i+1
          el.slug = el.link.slice(52).replaceAll('/', '+')

          // axios get request to obtain article data
          let detail = await this.$axios.$get(el.link)
          el.article = detail.detail_post.post_content
          return el
        })
      )

      // assigning it to the state using mutation
      context.commit('fetchNews', posts) 
    } catch (err) {
      console.log(err);
    }
  },

  // this method is to edit existing fetched data
  editNews(context, {id, formData}) {
    // finding the index
    let index = context.state.fetchedNews.findIndex(el => el.id === +id)

    // finding the current data
    let previousData = context.state.fetchedNews.find(el => el.id === +id)

    // replacing current data with new title/article/image
    let newData = {
      ...previousData,
      title: formData.title,
      article: formData.article,
      image: formData.image
    }

    // assigning it to the state using mutation
    context.commit('editDetail', {index, newData})
  },
}