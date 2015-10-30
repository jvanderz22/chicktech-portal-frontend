import Application from '../serializers/application';

export default Application.extend({
  serialize(snapshot, options){
    var val = this._super(snapshot, options);
    return val
  }
});
