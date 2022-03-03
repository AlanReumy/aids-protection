const faqModule = {
  namespaced: true,
  state() {
    return {
      faqList: [
        {
          id: 1,
          title: '你不知道的JavaScript',
          author: 'curry',
          desc: 'hello world',
          content: 'javascript is the best',
          agreeCount: 10,
          disAgreeCount: 10,
          commentCount: 10,
          commentList: [
            {
              id: 1,
              author: 'james',
              comment: '123123123123123123123123'
            },
            {
              id: 2,
              author: 'james',
              comment: '123'
            },
            {
              id: 3,
              author: 'james',
              comment: '123'
            }
          ]
        },
        {
          id: 2,
          title: '你不知道的JavaScript',
          author: 'curry',
          desc: 'hello world',
          content: 'javascript is the best',
          agreeCount: 10,
          disAgreeCount: 10,
          commentCount: 10,
          commentList: [
            {
              id: 1,
              author: 'james',
              comment: '123'
            },
            {
              id: 2,
              author: 'james',
              comment: '123'
            },
            {
              id: 3,
              author: 'james',
              comment: '123'
            }
          ]
        },
        {
          id: 3,
          title: '你不知道的JavaScript',
          author: 'curry',
          desc: 'hello world',
          content: 'javascript is the best',
          agreeCount: 10,
          disAgreeCount: 10,
          commentCount: 10,
          commentList: [
            {
              id: 1,
              avatar: '',
              author: 'james',
              comment: '123'
            },
            {
              id: 2,
              avatar: '',
              author: 'james',
              comment: '123'
            },
            {
              id: 3,
              avatar: '',
              author: 'james',
              comment: '123'
            }
          ]
        }
      ]
    }
  },
  mutations: {},
  modules: {}
}
export default faqModule //导出store对象
