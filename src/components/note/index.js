import note from './note';

note.install = function (Vue) {
  Vue.component(note.name, note);
};

export default note;
