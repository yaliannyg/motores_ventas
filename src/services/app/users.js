import Api from "@/services/api";

export default {
  login(email, password) {
    return Api.post('/login/normal', { email, password });
  },
  register(email, displayName, password) {
      return Api.post('/signup')
  },
};
