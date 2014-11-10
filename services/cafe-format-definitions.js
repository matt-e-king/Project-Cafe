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
          value : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore esse excepturi, mollitia tenetur ullam perspiciatis iusto quos dignissimos, fuga sapiente?'
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
        label : {
          value: 'Heading Three'
          , type: 'text'
        }
      }

    };

    this.list.heading4 = {

      order: 0
      , meta : {
        id : {
          value: 'heading4'
          , type: 'text'
          , showInLoop: false
        }
        , type : {
          value : 'heading4'
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
          value: 'Heading Four'
          , type: 'text'
        }
      }

    };

    this.list.spacing = {

      order: 0
      , meta : {
        id : {
          value: 'spacing'
          , type: 'text'
          , showInLoop: false
        }
        , type : {
          value : 'spacing'
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
          value: 'Spacing'
          , type: 'text'
        }
        , value : {
          value : '10'
          , type: 'text'
          , showInLoop: false
        }
      }

    };

  }

  return CafeFormatDefinitions;

});
