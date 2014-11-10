angular.module('CafeDefinitions').factory('CafeFormatDefinitions', function() {

  function CafeFormatDefinitions() {
    this.list = {};

    this.list.paragraph = {

      order: 0
      , meta : {
        id : {
          value: 'paragraph'
          , type: 'text'
          , showInLoop: false
        }
        , type : {
          value : 'paragraph'
          , type: 'text'
          , showInLoop: false
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
          value: 'Paragraph'
          , type: 'text'
          , showInLoop: false
        }
        , value : {
          value : 'Lorem ipsum'
          , type: 'textarea'
          , showInLoop: false
        }
      }

    };

    this.list.heading3 = {

      order: 0
      , meta : {
        id : {
          value: 'heading3'
          , type: 'text'
          , showInLoop: false
        }
        , type : {
          value : 'heading3'
          , type: 'text'
          , showInLoop: false
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
        value : {
          value : 'Heading Three'
          , type: 'text'
        }
      }

    };

  }

  return CafeFormatDefinitions;

});
