angular.module('CafeDefinitions').factory('CafeFieldDefinitions', function() {

  function CafeFieldDefinitions() {
    this.list = {};

    this.list.text = {

      order: 0
      , meta : {
        id : {
          value: 'textBox'
          , type: 'text'
        }
        , type : {
          value : 'text'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: true
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Text Box'
          , type: 'text'
        }
        , placeholder : {
          value: ''
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.number = {

      order: 0
      , meta : {
        id : {
          value: 'number'
          , type: 'text'
        }
        , type : {
          value : 'number'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: true
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Number'
          , type: 'text'
        }
        , placeholder : {
          value: ''
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.password = {

      order: 5
      , meta : {
        id : {
          value: 'password'
          , type: 'text'
        }
        , type : {
          value : 'password'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: true
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Password'
          , type: 'text'
        }
        , placeholder : {
          value: ''
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.file = {

      order: 10
      , meta : {
        id : {
          value: 'file'
          , type: 'text'
        }
        , type : {
          value : 'file'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: true
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Upload File'
          , type: 'text'
        }
        , placeholder : {
          value: ''
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.textarea = {

      order: 15
      , meta : {
        id : {
          value: 'textArea'
          , type: 'text'
        }
        , type : {
          value : 'textarea'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: false
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Text Area'
          , type: 'text'
        }
        , placeholder : {
          value: ''
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.email = {

      order: 20
      , meta : {
        id : {
          value: 'emailAddress'
          , type: 'text'
        }
        , type : {
          value : 'email'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: true
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Email Address'
          , type: 'text'
        }
        , placeholder : {
          value: 'email@domain.com'
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
      }

    };

    this.list.select = {

      order: 25
      , meta : {
        id : {
          value: 'dropdown'
          , type: 'text'
        }
        , type : {
          value : 'select'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: false
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Select a Value'
          , type: 'text'
        }
        , placeholder : {
          value: '-- Select a Value --'
          , type: 'text'
        }
        , value : {
          value : ''
          , type: 'text'
          , showInLoop: false
        }
        , options: {
          value : ['Option 1', 'Option 2']
          , type: 'textarea'
        }
      }

    };

    this.list.radio = {

      order: 30
      , meta : {
        id : {
          value: 'radio'
          , type: 'text'
        }
        , type : {
          value : 'radio'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: false
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Select a Radio Button'
          , type: 'text'
        }
        , value : {
          value : 'Option 1'
          , type: 'text'
          , showInLoop: false
        }
        , options: {
          value : ['Radio Option 1', 'Radio Option 2']
          , type: 'textarea'
        }
      }

    };

    this.list.checkbox = {

      order: 35
      , meta : {
        id : {
          value: 'checkbox'
          , type: 'text'
        }
        , type : {
          value : 'checkbox'
          , type: 'text'
          , showInLoop: false
        }
        , required : {
          value: false
          , type: 'checkbox'
        }
        , disabled : {
          value: false
          , type: 'checkbox'
        }
        , conditional : {
          value : 'true'
          , whichField : ''
          , operator : ''
          , type: 'text'
          , showInLoop: false
        }
        , width : {
          value : 12
          , showInLoop: false
        }
      }
      , content : {
        label : {
          value: 'Select a Checkbox Button'
          , type: 'text'
        }
        , value : {
          value : {}
          , showInLoop: false
        }
        , options: {
          value : ['Checkbox Option 1', 'Checkbox Option 2']
          , type: 'textarea'
        }
      }

    };

  }

  return CafeFieldDefinitions;

  

});