import React, { useState } from 'react';
import {withRouter} from "react-router-dom";
import {
    Form,
    Input,
    Button,
    Radio,
} from 'antd';

import classes from './ContactData.module.css';


const ContactData = (props) => {
    const [form] = Form.useForm();
    const [gender, setGender] = useState('male');
    const [formSize] = useState('default');
    /*
    * state: {
    *   gender: 'male'
    * }
    *
    * setGender(gender) => this.setState({gender: gender})
    * */

    const layout = {
        labelCol: {span: 5},
        wrapperCol: {span: 35}
    };

    const tailLayout = {
        wrapperCol: { offset: 5, span: 20 },
    };

    const onFinish = (values) => {
        if (values) {
            console.log(values);
            props.purchaseOrder(values);
        }
    };

    const onReset = () => {
        form.resetFields();
    }

    const onFill = () => {
        form.setFieldsValue({
            name: 'Yuqi Zhou',
            address: 'You guess',
            gender: 'male',
            email: 'kevinyuqi123@gmail.com'
        });
    }

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!'
        }
    };

    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            console.log('Success: ', values);
        } catch (e) {
            alert(e.errorFields[0].errors[0]);
        }
    }

    // we are using destructuring here
    const onGenderChange = ({gender}) => {
        setGender(gender);
    }

    return (
        <div className={classes.ContactData}>
            <Form
                {...layout}
                layout="horizontal"
                form={form}
                size={formSize}
                name="control-ref"
                initialValues={
                    {
                        gender: gender,
                        size: formSize
                    }
                }
                onValuesChange={onGenderChange}
                gender={gender}
                onFinish={onFinish}
                validateMessages={validateMessages}
            >
                <Form.Item name="name" label="Name" hasFeedback rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="address" label="Address" hasFeedback rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" hasFeedback rules={[{ required: true, type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Radio.Group>
                        <Radio.Button value="male">Male</Radio.Button>
                        <Radio.Button value="female">Female</Radio.Button>
                    </Radio.Group>
                </Form.Item>
                <Form.Item className={classes.Button} {...tailLayout}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                    <Button type="button" onClick={onReset}>Reset</Button>
                    <Button type="link" htmlType="button" onClick={onFill}>Fill Form</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default withRouter(ContactData);