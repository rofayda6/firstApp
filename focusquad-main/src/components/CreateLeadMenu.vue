<script>
import TextBox from "../components/TextBox.vue";
/*eslint-diable*/
export default {
  data() {
    return {
      showRespDetail: false,
      company: "",
    };
  },
  components: {
    TextBox,
  },
  methods: {
    openRespDetail() {
      this.showRespDetail = !this.showRespDetail;
    },
  },
};
</script>
<template>
  <div
    v-if="this.$store.state.openLeadModalVar"
    style="z-index: 10"
    class="ineset-0 fixed w-screen h-screen bg-[#00000052]"
  >
    <div class="task-modal flex justify-center items-center h-full">
      <div
        :class="
          this.$store.state.theme === 'dark'
            ? 'text-white bg-[#333333]  text-xs shadow rounded-[20px] px-5 max-w-lg w-full border py-5'
            : 'bg-white text-xs shadow rounded-[20px] px-5 max-w-lg w-full border py-5'
        "
      >
        <div class="header flex justify-between">
          <div class="lead text-lg">
            {{
              this.$store.state.lang === "en"
                ? "Create Lead"
                : "إنشاء عميل محتمل"
            }}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6 cursor-pointer mt-2 text-[#727272]"
            @click="this.$store.commit('openLeadModal')"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div class="font-sm text-[#8A8A8A] flex pb-5">
          {{
              this.$store.state.lang === "en"
                ? "Please fill all the fields to create new lead"
                : "الرجاء ملء كل الحقول لإنشاء عميل محتمل جديد "
            }}
        </div>
        <div class="client pb-2 w-full">
          <div class="block flex mb-1">
            {{ this.$store.state.lang === "en" ? "Company" : "الشركة" }}
          </div>
          <TextBox placeholderValue="Company Name" />
        </div>
        <div class="line flex gap-2 justify-between mt-3">
          <div class="visit-data w-[50%]">
            <div class="block flex mb-1">
              {{
                this.$store.state.lang === "en" ? "Phone Number" : "رقم الهاتف"
              }}
            </div>
            <TextBox placeholderValue="Phone Number" />
          </div>
          <div class="priority w-[50%]">
            <div class="block flex mb-1">
              {{
                this.$store.state.lang === "en" ? "Email" : "البريد الالكتروني"
              }}
            </div>
            <TextBox placeholderValue="Email" />
          </div>
        </div>
        <div class="line flex gap-2 justify-between mt-3">
          <div class="visit-data w-[50%]">
            <div class="block flex mb-1">
              {{ this.$store.state.lang === "en" ? "Address" : "العنوان" }}
            </div>
            <TextBox placeholderValue="Address" />
          </div>
          <div class="priority w-[50%]">
            <div class="block flex mb-1">
              {{ this.$store.state.lang === "en" ? "Location" : "الموقع" }}
            </div>
            <TextBox placeholderValue="Location Link" />
          </div>
        </div>
        <div class="responsible-detail">
          <div
            class="flex cursor-pointer gap-2 my-3"
            @click="this.openRespDetail"
          >
            <div class="wrapping-text text-blue-500">
              {{
                this.$store.state.lang === "en"
                  ? "Responsible Details"
                  : "بيانات الشخص المسؤول"
              }}
            </div>
            <div class="wrapping-arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-3 w-3 mt-1 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <div v-if="showRespDetail" class="wrapping-more-fields">
            <div class="line flex gap-2 justify-between mt-3">
              <div class="visit-data w-[50%]">
                <div class="block flex mb-1">
                  {{
                    this.$store.state.lang === "en"
                      ? "Responsible Name"
                      : "اسم الشخص المسؤول"
                  }}
                </div>
                <TextBox
                  :placeholderValue="
                    this.$store.state.lang === 'en'
                      ? 'Responsible Name'
                      : 'اسم المسؤول'
                  "
                />
              </div>
              <div class="priority w-[50%]">
                <div class="block flex mb-1">
                  {{
                    this.$store.state.lang === "en"
                      ? "Resp. Phone Number"
                      : "رقم هاتف الشخص المسؤول"
                  }}
                </div>
                <TextBox placeholderValue="Responsible Phone Number" />
              </div>
            </div>
            <div class="line flex gap-2 justify-between mt-3">
              <div class="visit-data w-[50%]">
                <div class="block flex mb-1">
                  {{
                    this.$store.state.lang === "en"
                      ? "Resp. Email"
                      : "البريد الالكتروني للشخص المسؤول"
                  }}
                </div>
                <TextBox placeholderValue="Responsible Email" />
              </div>
              <div class="priority w-[50%]">
                <div class="block flex mb-1">
                  {{
                    this.$store.state.lang === "en"
                      ? "Clinic Type"
                      : "نوع العيادة"
                  }}
                </div>
                <TextBox placeholderValue="Clinic Type" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end gap-5 p-1 mt-3">
          <button
            @click="showAddTask = false"
            class="cursor-pointer p-3 px-5 bg-blue-500 text-white font-semibold block rounded-md"
          >
            {{ this.$store.state.lang === "en" ? "Add" : "إضافة" }}
          </button>
          <button
            @click="this.$store.commit('openLeadModal')"
            class="cursor-pointer p-3 px-5 bg-[#C8C7C7] text-white font-semibold block rounded-md"
          >
            {{ this.$store.state.lang === "en" ? "Close" : "إلغاء" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>