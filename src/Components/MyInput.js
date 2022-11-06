import React, {PureComponent} from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import colors from '../utilities/colors';
import dimensions from '../utilities/dimensions';
// import {colors, dimensions} from '../theme';

class MyInput extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPassowrd: this.props.password,
      showCalendar: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.passReference) this.props.passReference(this.autocomplete);
    }, 500);
  }

  onDateChange = day => {
    this.props.onDateChange(day);
    this.setState({showCalendar: false});
  };

  render() {
    const {
      label,
      disable,
      placeholder,
      placeHolderTextColor,
      error,
      errorMessage,
      value,
      onTextChange,
      onChange,
      onFocus,
      onBlur,
      type,
    } = this.props;
    return (
      <View style={[styles.inputContainer, this.props.containerStyle]}>
        {label ? (
          <View style={styles.labelTextContainer}>
            <Text bold={true} style={styles.labelText}>
              {label}
            </Text>
          </View>
        ) : null}
        <View
          style={[
            styles.inputWrapper,
            {borderColor: error ? '#f00' : '#bbb'},
            this.props.style,
          ]}
        >
          <TextInput
            ref={this.props.ref}
            style={[
              styles.textInput,
              this.props.textStyle,
              disable ? {color: '#bbb'} : null,
            ]}
            onChangeText={text =>
              onChange ? onChange(text) : onTextChange(text)
            }
            onEndEditing={e => onBlur(e.nativeEvent.text)}
            onFocus={e => (onFocus ? onFocus(e.nativeEvent.text) : null)}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={
              placeHolderTextColor ? placeHolderTextColor : '#bbb'
            }
            editable={disable ? false : true}
            keyboardType={
              type === 'number'
                ? 'numeric'
                : type === 'places'
                ? 'default'
                : type
            }
            secureTextEntry={this.state.isPassowrd}
            autoCorrect={false}
            textContentType="none"
            autoCapitalize={type == 'email-address' ? 'none' : 'sentences'}
            // ref={(ref) => (this.autocomplete = ref)}
            autoFocus={this.props.autoFocus}
          />
        </View>
        {error ? (
          <View style={styles.errorTextContainer}>
            <Text style={styles.errorText}>{errorMessage}</Text>
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    paddingVertical: 5,
  },
  inputWrapper: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    height: dimensions.vw * 100 < 600 ? dimensions.vw * 11 : 50,
    alignItems: 'center',
  },
  iconContainer: {
    height: '100%',
    width: 40,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    height: '100%',
    paddingHorizontal: 10,
    color: colors.textColor,
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Regular'
    //     : 'AvenirNextLTPro-Regular',
    fontSize: 14,
    flex: 1,
    paddingVertical: 0,
    margin: 0,
    marginVertical: 0,
  },

  errorTextContainer: {
    paddingHorizontal: 2,
  },
  errorText: {
    color: '#f00',
    fontSize: 11,
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Regular'
    //     : 'AvenirNextLTPro-Regular',
  },
  labelTextContainer: {
    paddingHorizontal: 2,
    marginBottom: 3,
  },
  labelText: {
    color: '$textColor',
    fontSize: 14,
    // fontFamily:
    //   Platform.OS === 'android'
    //     ? 'AvenirNextLTPro-Demi'
    //     : 'AvenirNextLTPro-Demi',
  },
});

export default MyInput;
