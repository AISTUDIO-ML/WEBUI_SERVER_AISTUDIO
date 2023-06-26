import axios from "axios"
import MockAdapter from "axios-mock-adapter"

const app = new MockAdapter(axios)

export default app
