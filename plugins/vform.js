import Vue from 'vue'
import { AlertError, AlertSuccess, Form, HasError } from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)
Vue.component(AlertSuccess.name, AlertSuccess)
export default ({ $axios }) => {
  Form.axios = $axios
}
