/*
 * File: app/controller/DummyController.js
 *
 * This file was generated by Sencha Architect version 3.0.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Training.controller.DummyController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            userName: '#username'
        },

        control: {
            "#loginbutton": {
                tap: 'onLoginButtonTapped'
            }
        }
    },

    onLoginButtonTapped: function(button, e, eOpts) {
        if(this.getUserName().getValue() == "admin")
            alert("Cool");
    }

});