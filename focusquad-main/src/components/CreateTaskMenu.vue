<script>
import TextBox from "../components/TextBox.vue";
import SelectBox from "./SelectBox.vue";
/*eslint-diable*/
export default {
  components: {
    TextBox,
    SelectBox,
  },
  data() {
    return {
      optionData: [
        {
          id: 1,
          name: "Rakan",
        },
        {
          id: 2,
          name: "Rofayda",
        },
        {
          id: 3,
          name: "Ahmed",
        },
        {
          id: 4,
          name: "Mohamad",
        },
      ],
      visitTypeOptions: [
        {
          id: 1,
          type: "Follow Up",
        },
        {
          id: 2,
          type: "Collection",
        },
      ],
      priority: [
        {
          id: 1,
          type: "High",
        },
        {
          id: 2,
          type: "Normal",
        },
        {
          id: 3,
          type: "Low",
        },
      ],
    };
  },
};
</script>
<template>
  <div
    v-if="this.$store.state.openTaskModalVar"
    style="z-index: 10"
    class="h-screen bg-[#00000052] fixed w-screen"
  >
    <div class="task-modal flex justify-center items-center h-full w-full">
      <div
        style="border-top-left-radius: 20px"
        
        :class="
          this.$store.state.theme === 'dark'
            ? 'text-white bg-[#333333] absolute right-0 text-xs shadow px-5 max-w-lg w-[35%] border py-5 h-full'
            : 'text-[#8A8A8A] bg-white absolute right-0 text-xs shadow px-5 max-w-lg w-[35%] border py-5 h-full'
        "
      >
        <div class="header flex justify-between">
          <div class="lead text-lg">
            {{ this.$store.state.lang === "en" ? "Create Task" : "إنشاء مهمة" }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6 cursor-pointer mt-2 text-[#727272]"
            @click="this.$store.commit('openTaskModal')"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div class="font-sm text-[#8A8A8A] flex pb-4">
          {{
            this.$store.state.lang === "en"
              ? "Please fill all the fields to create new visit"
              : "الرجاء ملء كل الحقول لإنشاء مهمة جديدة"
          }}
        </div>
        <div class="w-full">
          <div class="block flex mb-1 py-2">
            {{ this.$store.state.lang === "en" ? "Title" : "العنوان" }}
          </div>
          <TextBox
            :placeHolderValue="
              this.$store.state.lang === 'en' ? 'Title of Task' : 'عنوان المهمة'
            "
          />
          <div class="task-type">
            <div class="block flex mb-1 py-2">
              {{ this.$store.state.lang === "en" ? "Task Type" : "نوع المهمة" }}
            </div>
            <SelectBox
              :options="visitTypeOptions"
              :placeHolderValue="
                this.$store.state.lang === 'en'
                  ? 'Task Type'
                  : 'اختر نوع المهمة'
              "
              valueKey="id"
              nameKey="type"
            />
          </div>
          <div class="priority w-full">
            <div class="block flex mb-1 py-2">
              {{
                this.$store.state.lang === "en"
                  ? "Assignee"
                  : "الموظف المكلف له"
              }}
            </div>
            <SelectBox
              :options="optionData"
              :placeHolderValue="
                this.$store.state.lang === 'en'
                  ? 'Select Assignee'
                  : 'اختر الموظف'
              "
              valueKey="id"
              nameKey="name"
            />
          </div>
        </div>
        <div class="line flex gap-2 justify-between mt-3">
          <div class="Task-data w-[50%]">
            <div class="block flex mb-1">
              {{ this.$store.state.lang === "en" ? "Task Date" : "التاريخ" }}
            </div>
            <input
              type="date"
              :class="
                this.$store.state.theme === 'dark'
                  ? 'wrapping-text-box bg-[#3c3c3c] outline-none focus:border-blue-600 border w-full border-[#656565] rounded-lg placeholder:text-[#C7C7C7] text-white w-[100%] px-7 py-1.5 cursor-pointer'
                  : 'border border-[#E1E1E1] outline-none focus:border-blue-600 rounded-lg bg-[#F9F9F9] w-[100%] px-7 py-0.5 text-[#C7C7C7] cursor-pointer'
              "
            />
          </div>
          <div class="priority w-[50%]">
            <div class="block flex mb-1">
              {{ this.$store.state.lang === "en" ? "Priority" : "الأهمية" }}
            </div>
            <SelectBox
              class="px-9"
              :options="priority"
              :placeHolderValue="
                this.$store.state.lang === 'en'
                  ? 'Select Priority'
                  : 'اختر الأهمية'
              "
              valueKey="id"
              nameKey="type"
            />
          </div>
        </div>
        <div class="wrapping">
          <div class="Description">
            <div class="block flex mb-1 py-2">
              {{ this.$store.state.lang === "en" ? "Description" : "الوصف" }}
            </div>
            <TextBox placeholderValue="" class="py-8" />
          </div>
          <div
            :class="
              this.$store.state.theme === 'dark'
                ? 'cursor-pointer bg-[#3c3c3c] outline-none focus:border-blue-600 border border-dashed h-[20%] w-full border-[#DFDFDF] rounded-lg text-[#C7C7C7] py-4 mt-3 text-center'
                : 'cursor-pointer bg-[#F9F9F9] outline-none focus:border-blue-600 border border-dashed h-[20%] w-full border-[#DFDFDF] rounded-lg text-[#C7C7C7] py-4 mt-3 text-center'
            "
          >
            {{ this.$store.state.lang === "en" ? "Attachment" : "ملحقات" }}
          </div>
        </div>
        <div class="flex justify-end gap-5 py-5">
          <button
            class="cursor-pointer p-3 px-5 bg-[#F2F2F2] text-gray-400 font-semibold block rounded-md border border-[#C8C7C7]"
            @click="this.$store.commit('openTaskModal')"
          >
            {{ this.$store.state.lang === "en" ? "Close" : "إلغاء" }}
          </button>
          <button
            @click="showAddTask = false"
            class="cursor-pointer p-3 px-5 bg-blue-500 text-white font-semibold block rounded-md"
          >
            {{ this.$store.state.lang === "en" ? "Add" : "إضافة" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
