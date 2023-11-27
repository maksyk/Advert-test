<script lang="ts">
import { PropType, defineComponent } from "vue";

export default defineComponent({
  props: {
    header: {
      type: String as PropType<string>,
      required: true,
    },
    field: {
      type: String as PropType<string | null>,
      default: null,
    },
  },
  render() {
    return null;
  },
});
</script>
