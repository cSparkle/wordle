import { shallowMount } from "@vue/test-utils";
import Keyboard from "../Keyboard.vue";

describe("Keyboard", () => {
  let wrapper;

  beforeEach(async () => {
    wrapper = await shallowMount(Keyboard);
  });

  it("should mount", () => {
    expect(wrapper.exists()).toBe(true);
  });
});
