<script setup>
import IconEdit from "./IconEdit.vue";
import IconView from "./IconView.vue";
import IconDelete from "./IconDelete.vue";
import { useModal } from "vue-final-modal";
import CreateCustomer from "./CreateCustomer.vue";
import ConfirmDelete from "./ConfirmDelete.vue";
import ViewCustomer from "./ViewCustomer.vue";

const props = defineProps({
  data: Object,
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
  <div
    class="max-w-80 min-w-64 p-5 bg-white shadow-lg rounded-lg flex-1 grow-1 basis-auto"
  >
    <div class="flex justify-between items-center gap-5 mb-5">
      <h4 class="font-medium text-xl">
        {{ `${data.firstName} ${data.lastName}` }}
      </h4>
      <div class="flex justify-between items-center gap-2">
        <button class="bg-transparent" @click="openEdit">
          <IconEdit class="w-5 h-5" />
        </button>
        <!-- <button class="bg-transparent" @click="openView">
          <IconView class="w-5 h-5" />
        </button> -->
        <button class="bg-transparent" @click="openDelete()">
          <IconDelete class="w-5 h-5" />
        </button>
      </div>
    </div>

    <div class="space-y-5 text-sm">
      <div>
        <p class="font-medium">Email</p>
        <p>{{ data.email }}</p>
      </div>

      <div>
        <p class="font-medium">Phone</p>
        <p>{{ data.phone }}</p>
      </div>

      <div>
        <p class="font-medium">State</p>
        <p>{{ data.state }}</p>
      </div>

      <div>
        <p class="font-medium">Status</p>
        <p>{{ data.status ? "Active" : "Inactive" }}</p>
      </div>

      <div>
        <p class="font-medium">About</p>
        <div v-html="data.about"></div>
      </div>
    </div>
  </div>
</template>
