sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("exer1sumalde.project1.controller.MainView", {
        onInit() {
            
        },

    //  onAddItem: function (){
    //       this.fnDisplayMsg("Add button pressed");
    //  },
    
        onAddItem: function (){
            let oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            let sMsg = oTextBundle.getText("addButtonMsg");
            let sMsgempty = oTextBundle.getText("Error");
         
            let oView = this.getView();
            let fName = oView.byId("idInptFName").getValue();
            let lName = oView.byId("idInptLName").getValue();
            if (fName ==="" && lName ==="") {
                this.fnDisplayMsg(sMsgempty);
                return;
            }else{
                this.fnDisplayMsg(sMsg);
                return;
            };
        },

        onChangeMOP: function (oEvent) {
            let sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
            let oMobileLabelpn = this.getView().byId("idLblPhone");
            let oMobileInputpn = this.getView().byId("idInputPhone");
            let oMobileLabelcc = this.getView().byId("idLblcc");
            let oMobileInputcc = this.getView().byId("idInputcc");
            let oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            let sMsgcc = oTextBundle.getText("paymentCC")
            let sMsggcash = oTextBundle.getText("paymentGCASH")
            let sMsgcod = oTextBundle.getText("paymentCOD")
            

            if (sSelectedKey === "GCASH"){
                oMobileLabelpn.setVisible(true);
                oMobileInputpn.setVisible(true);
                this.fnDisplayMsg(sMsggcash);
            } else {
                oMobileLabelpn.setVisible(false);
                oMobileInputpn.setVisible(false);
            };

            if (sSelectedKey === "CC"){
                oMobileLabelcc.setVisible(true);
                oMobileInputcc.setVisible(true);
                this.fnDisplayMsg(sMsgcc);
            } else {
                oMobileLabelcc.setVisible(false);
                oMobileInputcc.setVisible(false);
            };
            
            if (sSelectedKey === "COD"){
                this.fnDisplayMsg(sMsgcod);
            };
        },

        onPressCheckout: function (){
            let oInputFNameValue = this.getView().byId("idInptFName").getValue();
            let oInputLNameValue = this.getView().byId("idInptLName").getValue();
            let oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            let sMsgempty = oTextBundle.getText("Error1");
            let sMsgsuccess = oTextBundle.getText("Success");
            if (oInputFNameValue === "" && oInputLNameValue===""){
               // sap.m.MessageToast.show("Required Field is blank"); 
                  this.fnDisplayMsg(sMsgempty);
                  return;
            }else{
                  this.fnDisplayMsg(sMsgsuccess);
                  return;
            }
        },

        fnDisplayMsg: function (sMsg){
            MessageToast.show(sMsg);
        },
    });
});