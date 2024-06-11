<script>
import SelectBox from "../components/SelectBox.vue";

/*eslint-diable*/
export default {
  components: {
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
      name: "rakan",
    };
  },
};
</script>

<template>
  <div
    v-if="this.$store.state.openVisitModalVar"
    style="z-index: 10"
    class="ineset-0 fixed w-screen h-screen bg-[#00000052]"
  >
    <div class="task-modal flex justify-center items-center h-full">
      <div
        :class="
          this.$store.state.theme === 'dark'
            ? ' bg-[#333333] shadow rounded-md text-white px-10 max-w-lg w-full border p-4'
            : 'bg-white shadow rounded-md px-10 max-w-lg w-full border p-4'
        "
      >
        <div class="header flex justify-between">
          {{ this.$store.state.lang === "en" ? "Create Visit" : "إنشاء زيارة" }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-4 w-4 cursor-pointer mt-1"
            @click="this.$store.commit('openVisitModal')"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div
          :class="
            this.$store.state.theme === 'dark' ? 'text-white' : 'text-[#8A8A8A]'
          "
        >
          <div class="text-xs text-[#8A8A8A] flex pb-5">
            {{
              this.$store.state.lang === "en"
                ? "Please fill all the fields to create new visit"
                : "الرجاء ملء كل الحقول لإنشاء زيارة جديدة"
            }}
          </div>
          <div class="client pb-2">
            <div class="text-sm block flex">
              {{
                this.$store.state.lang === "en"
                  ? "Client/Lead"
                  : "العميل/ العميل المحتمل"
              }}
            </div>
            <SelectBox
              :options="optionData"
              :placeHolderValue="
                this.$store.state.lang === 'en'
                  ? 'Select Client/Lead'
                  : 'اختر العميل/العميل المحتمل'
              "
              valueKey="id"
              nameKey="name"
            />
          </div>
          <div class="visit pb-2">
            <div class="flex text-sm block">
              {{
                this.$store.state.lang === "en" ? "Visit Type" : "نوع الزيارة"
              }}
            </div>
            <SelectBox
              :options="visitTypeOptions"
              :placeHolderValue="
                this.$store.state.lang === 'en'
                  ? 'Select Visit Type'
                  : 'اختر نوع الزيارة'
              "
              valueKey="id"
              nameKey="type"
            />
          </div>
          <div class="line flex justify-between">
            <div class="visit-data">
              <div class="text-sm block">
                {{
                  this.$store.state.lang === "en"
                    ? "Visit Date"
                    : "تاريخ الزيارة"
                }}
              </div>
              <input
                :class="
                  this.$store.state.theme === 'dark'
                    ? 'wrapping-text-box bg-[#3c3c3c] outline-none focus:border-blue-600 border w-full border-[#656565] rounded-lg placeholder:text-[#C7C7C7] text-white w-[100%] px-7 py-1.5 cursor-pointer'
                    : 'border border-[#E1E1E1] outline-none focus:border-blue-600 rounded-lg bg-[#F9F9F9] w-[100%] px-7 py-0.5 text-[#C7C7C7] cursor-pointer'
                "
                type="date"
              />
            </div>
            <div class="priority">
              <div class="text-sm block flex">
                {{ this.$store.state.lang === "en" ? "Priority" : "الأهمية" }}
              </div>
              <SelectBox
                class="px-9"
                :options="priority"
                :placeHolderValue="
                  this.$store.state.lang === 'en'
                    ? 'Select Priority'
                    : 'اختر الاهمية'
                "
                valueKey="id"
                nameKey="type"
              />
            </div>
          </div>
          <div class="flex justify-end gap-5">
            <button
              @click="this.$store.commit('openVisitModal')"
              :class="
                this.$store.state.theme === 'dark'
                  ? 'cursor-pointer px-4 py-2 bg-[#C8C7C7] text-[#686868] font-semibold text-xs block rounded-md mt-10'
                  : 'cursor-pointer px-4 py-2 bg-[#C8C7C7] text-white font-semibold text-xs block rounded-md mt-10'
              "
            >
              {{ this.$store.state.lang === "en" ? "Close" : "إغلاق" }}
            </button>
            <button
              @click="showAddTask = false"
              class="cursor-pointer px-4 py-2 bg-blue-500 text-white font-semibold text-xs block rounded-md mt-10"
            >
              {{ this.$store.state.lang === "en" ? "Add" : "إضافة" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>