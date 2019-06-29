import React from 'react';
import { View, Text } from 'react-native';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.props.posts) + ""}</Text>
            </View>
        );
    }
}

export default Posts;