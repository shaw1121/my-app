import React from 'react';
import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';


function ToolBar(props) {
    return(
        <ThemedButton onClick = {props.changeTheme} >
            Change theme
        </ThemedButton>
    )
}

class ContextApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            theme: themes.light
        }

        this.toggleTheme = () => {
            this.setState(state => ({
              theme:
                state.theme === themes.dark
                  ? themes.light
                  : themes.dark,
            }));
        }
    };

    render(){
        return(
            <div>
                <ThemeContext.provider value = {this.state.theme}>
                    <ToolBar changeTheme={this.toggleTheme} />
                </ThemeContext.provider>

                <div>
                    <ThemedButton />
                </div>
            </div>
        )
    }
}

export default {
    ContextApp
}