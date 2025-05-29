sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast'
], function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("exer1sumalde.project1.controller.MainView", {
        onInit() {
            
        },

        onAddItem: function (){
            // Comment this code for now
            // var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            // var sMsg = oTextBundle.getText("addButtonMsg");
            // this.fnDisplayMsg(sMsg);

            // Instantiate the fragment

            // create dialog lazily
            if (!this.oDialog) {
                // By using loadFragment, we are adding the fragment as a dependent to the View
                // By doing so, we can use the functions inside the view's controller
                this.oDialog = this.loadFragment({
                    name: "exer1sumalde.project1.fragment.productDialog"
                });
            } 
            this.oDialog.then(function(oDialog) {
                oDialog.open();
            });
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

         //fragment exercise
          var oInputFName = this.getView().byId("idInptFName");
          var oInputLName = this.getView().byId("idInptLName");
          var oInputFNameValue = oInputFName.getValue();
          var oInputLNameValue = oInputLName.getValue();
          var oRouter = this.getOwnerComponent().getRouter();

         if (oInputFNameValue === "" || oInputLNameValue === ""){
             
          // set value state to Error
              oInputFName.setValueState("Error");
              oInputLName.setValueState("Error");
          } else {
              oInputFName.setValueState("None");
              oInputLName.setValueState("None");
          
          //Navigate to review page passing first
              oRouter.navTo("RouteReviewPage", {
                  firstName: oInputFNameValue
              });
          
          }         
      },

  onCloseDialog: function (){
      this.getView().byId("idProductDialog").close();
      },

   fnDisplayMsg: function (sMsg){
        MessageToast.show(sMsg);
    }

    });
});