import axios from "axios"

export default {
    search: function (dog) {
        return axios.get()
    },
    random: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random")
    }
}