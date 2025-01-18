<script setup>
import IconEdit from "./IconEdit.vue";
import IconView from "./IconView.vue";
import IconDelete from "./IconDelete.vue";
import { useModal } from "vue-final-modal";
import CreateCustomer from "./CreateCustomer.vue";
import ConfirmDelete from "./ConfirmDelete.vue";
import ViewCustomer from "./ViewCustomer.vue";

const props = defineProps({
  customerData: Object,
  index: Number,
});

const { open: openEdit, close: closeEdit} = useModal({
  component: CreateCustomer,
  attrs: {
    edit: true,
    index: props.index,
    customer: props.customerData,
    onConfirm() {
      closeEdit();
    },
  }
});

const { open: openDelete, close: closeDelete } = useModal({
  component: ConfirmDelete,
  attrs: {
    index: props.index,
    name: `${props.customerData.firstName} ${props.customerData.lastName}'s`,
    onConfirm() {
      closeDelete();
    },
  },
});

const { open: openView, close:closeView } = useModal({
  component: ViewCustomer,
  attrs: {
    customerInfo: props.customerData,
    onConfirm() {
      closeView();
    },
  },
});
</script>
<template>
  <tr class="*:font-light *:border *:px-2 *:py-1 border-gray-500">  
    <td>
      <p class="text-center">
        {{ index + 1 }}
      </p>
    </td>
    <td>
      <p>
        {{ customerData.firstName }}
      </p>
    </td>
    <td>
      <p>
        {{ customerData.lastName }}
      </p>
    </td>
    <td>
      <p>
        {{ customerData.email }}
      </p>
    </td>
    <td>
      <p>
        {{ customerData.phone }}
      </p>
    </td>
    <td class="hidden lg:table-cell">
      <p>
        {{ customerData.state }}
      </p>
    </td>
    <td class="hidden lg:table-cell">
      <p>
        {{ customerData.status }}
      </p>
    </td>
    <td>
      <div class="flex justify-around">
        <button
          class="bg-transparent"
          @click="openEdit"
        >
          <IconEdit class="w-5 h-5" />
        </button>
        <button
          class="bg-transparent"
          @click="openView"
        >
          <IconView class="w-5 h-5" />
        </button>
        <button
          class="bg-transparent"
          @click="openDelete()"
        >
          <IconDelete class="w-5 h-5" />
        </button>
      </div>
    </td>
  </tr>
</template>
