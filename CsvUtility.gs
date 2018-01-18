var CsvUtility=new function(){  
  //---------------------------------------------------------
  /**
  * upload CSV Data  to  FIREBASE function     
  * @param  {string} auth token     
  * @param  {string} user uid on firebase
  * @param  {ARRAY} csvData
  */
  //---------------------------------------------------------
  this.elaborateData=function(userToken,uid, values) {
    
    //retrive config
    var batchCSVMappingNode= 'config/batchConfig/igc/CSVMappingOrderFields';
    var batchCSVMapping = FirebaseConnector.getFireBaseDataParsed(batchCSVMappingNode, userToken);    
    
    //the saving node
    var dataNode= 'dataIGC';
    
    var lenght = values.length;    
    
    //inizialize the json array
    var jsonArray = []
  
   
        
    //loop the CSV elements
    for(var i=1; i<lenght;i++){
      //jsonRow
      var jsonRow={};      
            
      jsonRow.AMIS_Region_Code=values[i][batchCSVMapping.AMIS_Region_Code];
      jsonRow.AMIS_Region=values[i][batchCSVMapping.AMIS_Region];
      jsonRow.AMIS_PRODUCT=values[i][batchCSVMapping.AMIS_PRODUCT];
      jsonRow.AMIS_Element_Code=values[i][batchCSVMapping.AMIS_Element_Code];
      
      jsonRow.AMIS_Element=values[i][batchCSVMapping.AMIS_Element];
      jsonRow.Amis_Units=values[i][batchCSVMapping.Amis_Units];
      jsonRow.Amis_Year=values[i][batchCSVMapping.Amis_Year];
      jsonRow.AMIS_Fcast_Month=values[i][batchCSVMapping.AMIS_Fcast_Month];
      jsonRow.Amis_Value=values[i][batchCSVMapping.Amis_Value];
      jsonRow.Note_1=values[i][batchCSVMapping["Note 1"]];
      jsonRow.Note_2=values[i][batchCSVMapping["Note 2"]];
      jsonRow.Note_3=values[i][batchCSVMapping["Note 3"]];
      jsonRow.AMOUNT_VALUE=values[i][batchCSVMapping.AMOUNT_VALUE];
      
      jsonArray.push(jsonRow);
      //break;
    }    
    
    //Logger.log(jsonArray);
    
    //save data in FIREBASE
    FirebaseConnector.writeOnFirebase(jsonArray,dataNode,userToken);
    
  }
  //---------------------------------------------------------
  // END Fetch Sheet Data from FIREBASE function
  //--------------------------------------------------------- 
}
