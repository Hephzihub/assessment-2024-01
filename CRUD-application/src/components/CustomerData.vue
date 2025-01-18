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

function openEdit() {
  const { open, close: closeEdit } = useModal({
    component: CreateCustomer,
    attrs: {
      edit: true,
      index: props.index,
      customer: props.data,
      onConfirm() {
        closeEdit();
      },
    },
  });

  open();
}

function openDelete() {
  const { open, close: closeDelete } = useModal({
    component: ConfirmDelete,
    attrs: {
      index: props.index,
      name: `${props.data.firstName} ${props.data.lastName}'s`,
      onConfirm() {
        closeDelete();
      },
    },
  });
  open();
}

function openView() {
  const { open, close: closeView } = useModal({
    component: ViewCustomer,
    attrs: {
      customerInfo: props.data,
      onConfirm() {
        closeView();
      },
    },
  });

  open();
}
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
        {{ customerData.status ? "Active" : "Inactive" }}
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
