import { shallowMount } from "@vue/test-utils";
import LetterSlot from "../LetterSlot.vue";

describe("LetterSlot", () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(LetterSlot)
    })

    it("should mount", () => {
        expect(wrapper.exists()).toBe(true);
    })

})