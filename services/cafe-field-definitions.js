cafeFieldDefinitions.factory('CafeFieldDefinitions', function() {

	function CafeFieldDefinitions() {
		this.list = {};

		this.list.text = {

			meta : {
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

    this.list.password = {

      meta : {
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

      meta : {
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

      meta : {
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

			meta : {
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

      meta : {
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

      meta : {
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

      meta : {
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

	
