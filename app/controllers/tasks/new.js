import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addTask: function(){
      var title = this.get('title');
      var description = this.get('description');
      var date = this.get('date');

      var newTask = this.store.createRecord('task', {
        title: title,
        description : description,
        date: new Date(date)
      });
      newTask.save();
      this.setProperties({
        title: '',
        description: '',
        date: ''
      });
    }
  }
});
