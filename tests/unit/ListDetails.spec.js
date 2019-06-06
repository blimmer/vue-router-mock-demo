import { mount } from '@vue/test-utils'
import ListDetails from '@/components/ListDetails.vue'

// The act of importing the router, which could be used for testing things like
// global navigation guards for authentication
// (e.g. https://scotch.io/tutorials/vue-authentication-and-route-handling-using-vue-router)
// prevents mocking router in other tests.
import router from '@/router';

describe('ListDetails.vue', () => {
  it('router test', () => {
    // This test now errors
    // console.error node_modules/@vue/test-utils/dist/vue-test-utils.js:1421
    // [vue-test-utils]: could not overwrite property $router, this is usually caused by a plugin that has added the property as a read-only value
    const wrapper = mount(ListDetails, {
      mocks: {
        $router: {
          name: 'foo'
        }
      }
    })
    expect(wrapper.text()).toBe('foo')
  })
})
