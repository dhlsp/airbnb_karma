<template>
	<div class="cb-container">
    <input type="checkbox" v-bind="$attrs" :checked="isSelect" class="my-checkbox">
    <label for="checkbox" class="cb-label" @click="changeIsSelect"></label>
    <label for="checkbox" @click="changeIsSelect" class="my-checkbox-label">
      <slot></slot>
    </label>
	</div>
</template>

<script>
export default {
  name: 'mCheckbox',
  props: {
    value: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      isSelect: false,
    };
  },
  mounted() {
    this.isSelect = this.value;
  },
  watch: {
    value(val) {
      this.isSelect = val;
    },
  },
  methods: {
    changeIsSelect() {
      if (this.isSelect) {
        this.isSelect = false;
        this.$emit('input', false);
      } else {
        this.isSelect = true;
        this.$emit('input', true);
      }
    },
  },
};
</script>

<style>
.cb-container {
	display: inline-block;
  user-select: none;
}

.my-checkbox-label {
	position: relative;
	top: -3px;
	cursor: pointer;
}

.my-checkbox {
	display: none;
}

.cb-label {
  height: 20px;
  width: 20px;
  background: #f9f9f9;
  border: 2px solid #cfcece;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  transition: border-color ease 0.2s;
  -moz-transition: border-color ease 0.2s;
  -o-transition: border-color ease 0.2s;
  -webkit-transition: border-color ease 0.2s;
  cursor: pointer;
}
.cb-label::before, .cb-label::after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: absolute;
  height: 0;
  width: 2px;
  background: #ffffff;
  display: inline-block;
  -moz-transform-origin: left top;
  -ms-transform-origin: left top;
  -o-transform-origin: left top;
  -webkit-transform-origin: left top;
  transform-origin: left top;
  content: '';
  -webkit-transition: opacity ease 0.5s;
  -moz-transition: opacity ease 0.5s;
  transition: opacity ease 0.5s;
}
.cb-label::before {
  top: 15px;
  left: 6px;
  -moz-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.cb-label::after {
  top: 9px;
  left: 0px;
  -moz-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

input[type=checkbox]:checked + .cb-label,
.cb-label.checked {
  background: #658db5;
  border-color: #658db5;
}
input[type=checkbox]:checked + .cb-label::after,
.cb-label.checked::after {
  border-color: #ffffff;
  height: 10px;
  -moz-animation: dothabottomcheck 0.2s ease 0s forwards;
  -o-animation: dothabottomcheck 0.2s ease 0s forwards;
  -webkit-animation: dothabottomcheck 0.2s ease 0s forwards;
  animation: dothabottomcheck 0.2s ease 0s forwards;
}
input[type=checkbox]:checked + .cb-label::before,
.cb-label.checked::before {
  border-color: #ffffff;
  height: 15px;
  -moz-animation: dothatopcheck 0.4s ease 0s forwards;
  -o-animation: dothatopcheck 0.4s ease 0s forwards;
  -webkit-animation: dothatopcheck 0.4s ease 0s forwards;
  animation: dothatopcheck 0.4s ease 0s forwards;
}

@-moz-keyframes dothabottomcheck {
	0% {
    height: 0;
  }
	100% {
    height: 7px;
  }
}
@-webkit-keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: 7px;
  }
}
@keyframes dothabottomcheck {
  0% {
    height: 0;
  }
  100% {
    height: 7px;
  }
}
@keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}
@-webkit-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}
@-moz-keyframes dothatopcheck {
  0% {
    height: 0;
  }
  50% {
    height: 0;
  }
  100% {
    height: 15px;
  }
}
</style>
