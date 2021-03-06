import React, {Component} from 'react';
import {Item, Icon} from 'semantic-ui-react';


class SkillItem extends Component {
    constructor(props) {
        super(props);
        const header = this.props.header;
        const content = this.props.content;

        this.state = {
            header: header,
            content: content
        }
    }

    render() {
        const header = this.state.header;
        const content = this.state.content;
        return (
            <Item>
                <Item.Content>
                    <Item.Header>
                        {header}
                        {content.map((item, key) => {
                            if(item.hasOwnProperty("icon")){
                                return <span key={key}>&nbsp;<Icon name={item.icon} title={item.name}/></span>
                            }
                            return null;
                        })}
                    </Item.Header>
                    <Item.Meta>
                    </Item.Meta>
                    <Item.Description>
                        {content.map((item, key) =>{
                            return (
                                <span key={key}><strong>{item.name}{item.hasOwnProperty('frameworks') ?
                                    ' ' :(key < content.length - 1 ? ', ': ' ')}</strong>

                                    <span>{item.frameworks ?(
                                        item.frameworks.map((framework, key) => {
                                            return(<em key={key} className="underground">{framework}{key < item.frameworks.length-1 ? ', ': ' '}</em>)
                                        }) ):
                                        null}</span>
                                </span>
                            )
                        })}

                    </Item.Description>
                </Item.Content>
            </Item>
        )
    }
}


export default SkillItem