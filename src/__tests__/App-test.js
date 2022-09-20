import { shallowMount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
