import * as React from 'react';
import TitleBar from '../../../src/components/TitleBar';
import {render} from '../../../src/index';


export default class SdkTest extends React.Component {
    state = {
        data: {
            name: 'Amis Renderer',
            id: 1,
            email: 'amis@baidu.com'
        }
    };

    renderForm() {
        return render({
            title: '',
            type: 'form',
            controls: [
                {
                    type: 'text',
                    name: 'name',
                    label: 'Name'
                },

                {
                    type: 'text',
                    name: 'id',
                    label: 'Id'
                },

                {
                    type: 'email',
                    name: 'email',
                    label: 'Email'
                },

                {
                    type: 'static',
                    label: '最后更新时间',
                    name: 'lastModified'
                }
            ]
        }, {
            data: this.state.data,
            onFailed: (reason, errors) => {
                console.log('Submit Failed', errors, '\n', reason);
            },
            onSubmit: (values) => {
                console.log('Submit', values);
            },
            onChange: (values, diff) => {
                this.setState({
                    data: {
                        ...values,
                        lastModified: new Date()
                    }
                });

                console.log('Diff', diff);
            },
        });
    }

    handleClick = () => {
        this.setState({
            data: {
                name: 'Amis Renderer',
                id: Math.round(Math.random() * 1000),
                email: 'amis@baidu.com'
            }
        })
    };

    render() {
        return (
            <div>
                <TitleBar title="API 调用 集成在你的 React 应用中" />
                <div className="wrapper">
                    {this.renderForm()}

                    <button onClick={this.handleClick}>随机修改</button>

                    <h3>当前值</h3>
                    <pre><code>{JSON.stringify(this.state.data, null, 2)}</code></pre>
                </div>
            </div>
        );
    }
}
