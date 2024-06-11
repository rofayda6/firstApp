<script>
import BackButton from "../components/BackButton.vue";
import OptionButton from "../components/OptionButton.vue";
/*eslint-diasble*/
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  components: {
    OptionButton,
    BackButton,
  },
};
</script>
<template>
  <div
    :class="
      this.$store.state.theme === 'dark'
        ? 'wrapping-main bg-[#1a1a1a] text-white w-screen h-screen px-10 py-5'
        : 'wrapping-main bg-white w-screen h-screen px-10 py-5'
    "
  >
    <div class="wrapping-header flex justify-between">
      <div class="wrapping-left-header flex gap-3">
        <BackButton @click="this.$router.push({ name: 'clientList' })" />
        <div class="wrapping-text font-bold text-lg mb-3">
          {{
            this.$store.state.lang === "en" ? "Client Details" : "بيانات العميل"
          }}
        </div>
      </div>
      <OptionButton />
    </div>
    <div class="wrapping-view flex justify-between">
      <div class="wrappin-left w-[70%]">
        <div
          :class="this.$store.state.theme==='dark'?'wappng-personal-content rounded-lg bg-[#2c2c2c] h-[30%] p-3 rounded-lg border border-[#656565] ':'wappng-personal-content rounded-lg bg-[#ECD6B9] h-[30%] p-3 rounded-lg border border-[#B3B3B3]'"
        >
          <div class="wrapping-first-line flex flex justify-between">
            <div class="wrapping-detail">
              <div class="wrapping-name">Client1</div>
              <div class="wrapping-email">client1@gmail.com</div>
            </div>
            <div class="wrapping-social flex gap-2">
              <svg
                class="h-5 w-5"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xml:space="preserve"
              >
                <path
                  style="fill: #385c8e"
                  d="M134.941,272.691h56.123v231.051c0,4.562,3.696,8.258,8.258,8.258h95.159
	c4.562,0,8.258-3.696,8.258-8.258V273.78h64.519c4.195,0,7.725-3.148,8.204-7.315l9.799-85.061c0.269-2.34-0.472-4.684-2.038-6.44
	c-1.567-1.757-3.81-2.763-6.164-2.763h-74.316V118.88c0-16.073,8.654-24.224,25.726-24.224c2.433,0,48.59,0,48.59,0
	c4.562,0,8.258-3.698,8.258-8.258V8.319c0-4.562-3.696-8.258-8.258-8.258h-66.965C309.622,0.038,308.573,0,307.027,0
	c-11.619,0-52.006,2.281-83.909,31.63c-35.348,32.524-30.434,71.465-29.26,78.217v62.352h-58.918c-4.562,0-8.258,3.696-8.258,8.258
	v83.975C126.683,268.993,130.379,272.691,134.941,272.691z"
                />
              </svg>
              <svg
                class="h-6 w-6"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 410.155 410.155"
                xml:space="preserve"
              >
                <path
                  style="fill: #76a9ea"
                  d="M403.632,74.18c-9.113,4.041-18.573,7.229-28.28,9.537c10.696-10.164,18.738-22.877,23.275-37.067
	l0,0c1.295-4.051-3.105-7.554-6.763-5.385l0,0c-13.504,8.01-28.05,14.019-43.235,17.862c-0.881,0.223-1.79,0.336-2.702,0.336
	c-2.766,0-5.455-1.027-7.57-2.891c-16.156-14.239-36.935-22.081-58.508-22.081c-9.335,0-18.76,1.455-28.014,4.325
	c-28.672,8.893-50.795,32.544-57.736,61.724c-2.604,10.945-3.309,21.9-2.097,32.56c0.139,1.225-0.44,2.08-0.797,2.481
	c-0.627,0.703-1.516,1.106-2.439,1.106c-0.103,0-0.209-0.005-0.314-0.015c-62.762-5.831-119.358-36.068-159.363-85.14l0,0
	c-2.04-2.503-5.952-2.196-7.578,0.593l0,0C13.677,65.565,9.537,80.937,9.537,96.579c0,23.972,9.631,46.563,26.36,63.032
	c-7.035-1.668-13.844-4.295-20.169-7.808l0,0c-3.06-1.7-6.825,0.485-6.868,3.985l0,0c-0.438,35.612,20.412,67.3,51.646,81.569
	c-0.629,0.015-1.258,0.022-1.888,0.022c-4.951,0-9.964-0.478-14.898-1.421l0,0c-3.446-0.658-6.341,2.611-5.271,5.952l0,0
	c10.138,31.651,37.39,54.981,70.002,60.278c-27.066,18.169-58.585,27.753-91.39,27.753l-10.227-0.006
	c-3.151,0-5.816,2.054-6.619,5.106c-0.791,3.006,0.666,6.177,3.353,7.74c36.966,21.513,79.131,32.883,121.955,32.883
	c37.485,0,72.549-7.439,104.219-22.109c29.033-13.449,54.689-32.674,76.255-57.141c20.09-22.792,35.8-49.103,46.692-78.201
	c10.383-27.737,15.871-57.333,15.871-85.589v-1.346c-0.001-4.537,2.051-8.806,5.631-11.712c13.585-11.03,25.415-24.014,35.16-38.591
	l0,0C411.924,77.126,407.866,72.302,403.632,74.18L403.632,74.18z"
                />
              </svg>
            </div>
          </div>
          <div class="wrapping-second-line flex justify-between text-sm">
            <div class="wrapping-data p-2">
              <div
                class="warpping-blue rounded-xl text-[#0000FF] font-semibold"
              >
                {{ this.$store.state.lang === "en" ? "Title" : "اللقب" }}
              </div>
              <div class="wrapping-gold rounded-xl ">Specialist</div>
            </div>

            <div class="wrapping-data p-2">
              <div
                class="warpping-blue rounded-xl text-[#0000FF] font-semibold"
              >
                {{ this.$store.state.lang === "en" ? "Address" : "العنوان" }}
              </div>
              <div class="wrapping-gold rounded-xl ">Jeddah</div>
            </div>
            <div class="wrapping-data p-2">
              <div
                class="warpping-blue rounded-xl text-[#0000FF] font-semibold"
              >
                {{ this.$store.state.lang === "en" ? "Location" : "الموقع" }}
              </div>
              <div
                class="wrapping-gold rounded-xl text-blue-500 cursor-pointer underline"
              >
                goo.gle/map
              </div>
            </div>
            <div class="wrapping-data p-2">
              <div
                class="warpping-blue rounded-xl text-[#0000FF] font-semibold"
              >
                {{ this.$store.state.lang === "en" ? "Phone" : "رقم الهاتف" }}
              </div>
              <div class="wrapping-gold rounded-xl ">055xxxxxxxx</div>
            </div>
            <div class="wrapping-data p-2">
              <div
                class="warpping-blue rounded-xl text-[#0000FF] font-semibold"
              >
                {{
                  this.$store.state.lang === "en"
                    ? "Cu. Target"
                    : "فئة العملاء المتسهدفين"
                }}
              </div>
              <div class="wrapping-gold rounded-xl ">VIP</div>
            </div>
          </div>
        </div>
        <div class="wrapping-tabs mt-5">
          <div class="tableTitleContent flex gap-3 ml-5">
            <div class="wrapping-tabs-name">
              <div
                @click="activeTab = 0"
                style="
                  border-top-left-radius: 10px;
                  border-top-right-radius: 10px;
                "
                :class="
                  activeTab === 0
                    ? 'wrapping-first-default-active-tab p-2 text-[#D4A160] cursor-pointer font-bold text-sm'
                    : 'wrapping-first-default-active-tab p-2 text-blue-500 cursor-pointer font-bold text-sm'
                "
              >
                {{ this.$store.state.lang === "en" ? "Visits" : "الزيارات" }}
              </div>
            </div>
            <div
              @click="activeTab = 1"
              style="
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              "
              :class="
                activeTab === 1
                  ? 'wrapping-first-default-active-tab p-2 text-[#D4A160] cursor-pointer font-bold text-sm'
                  : 'wrapping-first-default-active-tab p-2 text-blue-500 cursor-pointer font-bold text-sm'
              "
            >
              <div class="click">
                {{ this.$store.state.lang === "en" ? "Tasks" : "المهام" }}
              </div>
            </div>
          </div>
          <div
            :class="this.$store.state.theme==='dark'? 'separator-content-by-active-class rounded-lg bg-[#2c2c2c] p-3 rounded-lg border border-[#656565] h-[45vh]': 'separator-content-by-active-class rounded-lg bg-[#ECD6B9] p-3 rounded-lg border border-[#B3B3B3] h-[45vh]'"
          >
            <div v-if="activeTab === 0" class="wrapping-active-default-table">
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#306EC9] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
            </div>
            <div v-if="activeTab === 1" class="wrapping-active-default-table">
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
              <div
                class="wrapping-test bg-[#BA8645] w-full h-[5vh] rounded-xl animate-pulse my-2"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div class="wrapping-right h-[70vh] w-[55vh]">
        <div
          class="wrapping-card bg-[#316EC9] rounded-lg h-[20%] text-white mb-2"
        >
          <div class="warpping-card-content p-4 ml-5">
            <div class="wrapping-title"> {{ this.$store.state.lang === "en" ? "Total of Visits" : "مجموع الزيارات" }}</div>
            <div class="warpping-value font-bold">14</div>
          </div>
        </div>
        <div
          class="wrapping-card bg-[#316EC9] rounded-lg h-[20%] text-white mb-2"
        >
          <div class="warpping-card-content p-4 ml-5">
            <div class="wrapping-title"> {{ this.$store.state.lang === "en" ? "Total of Tasks" : "مجموع المهام" }}</div>
            <div class="warpping-value font-bold">10</div>
          </div>
        </div>
        <div
          class="wrapping-card bg-[#316EC9] rounded-lg h-[20%] text-white mb-2"
        >
          <div class="warpping-card-content p-4 ml-5">
            <div class="wrapping-title">  {{ this.$store.state.lang === "en" ? "Type of clinic" : "نوع العيادة" }}</div>
            <div class="warpping-value font-bold">Premium</div>
          </div>
        </div>
        <div
          class="wrapping-card bg-[#316EC9] rounded-lg h-[20%] text-white mb-2"
        >
          <div class="warpping-card-content p-4 ml-5">
            <div class="wrapping-title">  {{ this.$store.state.lang === "en" ? "Staff no." : "عدد الموظفين" }}</div>
            <div class="warpping-value font-bold">10</div>
          </div>
        </div>
        <div class="wrapping-card bg-[#316EC9] rounded-lg h-[20%] text-white">
          <div class="warpping-card-content p-4 ml-5">
            <div class="wrapping-title"> {{ this.$store.state.lang === "en" ? "Value" : "القيمة" }}</div>
            <div class="warpping-value font-bold">2.1M</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>