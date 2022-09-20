<template>
  <button v-for="letter in keyboardLetters" :key="letter">{{ letter }}</button>
</template>

<script>
import { keyboardLetters } from "../assets/keyboardLetters";
export default {
  name: "KeyboardButton",
  components: {},
  props: {
    letter: String,
  },
  data() {
    return {
      keyboardLetters: keyboardLetters,
    };
  },
};
</script>
