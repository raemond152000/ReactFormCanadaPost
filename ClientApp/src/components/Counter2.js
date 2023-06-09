import React, { useState, useRef, useEffect, useCallback } from 'react';
import './Counter.scss';
import { Form, Row, FormGroup, Col, Label, Legend, Input, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { DatePicker } from 'reactstrap-date-picker';



export function Counter() {
    const inputRef = useRef();
    const [inputValue, setInputValue] = useState('');
    const [state, setState] = useState({

         /*Housing/ Property Provider Information

*/      companyName: '',
        agentFirstname: '',
        agentLastname: '',
        agentEmail: '',
        bldgSite: '',
        bldgInfo: '',
        bldgStreetAddress: '',
        bldgCityAddress: '',
        bldgStateAddress: '',
        bldgPostCodeAddress: '',
        bldgMultiUnitAddress: '',
        bldgResidentialBusinessAddress: '',
        bldgAddress: '',
        leaseTerm: '',
        dateValue: '',
        sendFreeReport: '',

        /*Personal Information*/
        tenantSal: '',
        tenantFirstname: '',
        tenantInitials: '',
        tenantLastname: '',
        tenantEmail: '',
        tenantBirthdate: '',
        sincnd: '',


        /*app Personal Information*/
        appCurrentAddress: '',
        appCurrentStreetAddress: '',
        appCurrentCityAddress: '',
        appCurrentProvinceState: '',
        appCurrentPostalStateAddress: '',
        appCurrentCountryAddress: '',
        numMonthStay: '',
        appMoveInDate: '',
        HousingProviderName: '',
        HousingProviderEmail: '',
        HousingProviderPhone: '',
        HousingProviderMobilePhone: '',

        appFormerAddress1: '',
        appFormerStreetAddress1: '',
        appFormerCityAddress1: '',
        appFormerProvinceState1: '',
        appFormerPostalStateAddress1: '',
        appFormerCountryAddress1: '',
        appFormerMoveInDate1: '',
        appFormerMoveOutDate1: '',
        FormerHousingProviderName1: '',
        FormerHousingProviderEmail1: '',
        FormerHousingProviderPhone1: '',
        FormerHousingProviderMobilePhone1: '',

        appFormerAddress2: '',
        appFormerStreetAddress2: '',
        appFormerCityAddress2: '',
        appFormerProvinceState2: '',
        appFormerPostalStateAddress2: '',
        appFormerCountryAddress2: '',
        appFormerMoveInDate2: '',
        appFormerMoveOutDate2: '',
        FormerHousingProviderName2: '',
        FormerHousingProviderEmail2: '',
        FormerHousingProviderPhone2: '',
        FormerHousingProviderMobilePhone2: '',

        appFormerAddress3: '',
        appFormerStreetAddress3: '',
        appFormerCityAddress3: '',
        appFormerProvinceState3: '',
        appFormerPostalStateAddress3: '',
        appFormerCountryAddress3: '',
        appFormerMoveInDate3: '',
        appFormerMoveOutDate3: '',
        FormerHousingProviderName3: '',
        FormerHousingProviderEmail3: '',
        FormerHousingProviderPhone3: '',
        FormerHousingProviderMobilePhone3: '',

        lengthEmployment: '',
        incomeSource: '',
        employerCompanyName: '',
        employerContactName: '',
        employerContactPhone: '',
        employeeField: '',
        employeePosition: '',
        employmentMonthlyGross: '',
        otherSourceMonthlyGross: '',


        /* File Upload*/
        payStubFile: '',
        ispayStubFilePicked: false,
        employerLetter: '',
        isEmployerLetterPicked: false,
        utilityFile: '',
        isutilityFilePicked: false,
        renterInsuranceFile: '',
        isrenterInsuranceFilePicked: false,

        /*CanadaPost*/
        scriptLoaded: false,
        stylesLoaded: false,

        /*Hide/Show Former Address*/
        showAddress1: false,
        showAddress2: false,

    });

    const [showFormerAddress, setShowFormerAddress] = useState(false);
    const [showAddress1, setShowAddress1] = useState(false);
    const [showAddress2, setShowAddress2] = useState(false);




    const handleChange = (e) => {

        //if (state.hasOwnProperty(e.target.name)) {
        setState((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,

        }));


        //}
        const title = document.getElementById("bldgStreetAddress").value;
        setInputValue(title);
        e.preventDefault();
    };

    const handleSelectnumMonthsChange = (e) => {
        setState((prevState) => ({
            ...prevState,
            numMonthStay: e.target.value
        }));
    }; useEffect(() => {
        // Capture the value after it is populated by another callback function


        setState((prevState) => ({
            ...prevState,
            bldgStreetAddress: document.getElementById("bldgStreetAddress").value,
        }));
    }, []);

    /*Toggle Add/Delete Addresses*/
    const renderOptions = () => {
        const options = [];
        for (let i = 1; i <= 12; i++) {
            options.push(<option key={i} value={i}>{i}</option>);
        }
        options.push(<option key="12+" value="12+">12+</option>);
        return options;
    };
    /* const numMonths = Array.from({ length: 12 }, (_, index) => index + 1);*/

    useEffect(() => {
        if (state.numMonthStay >= 12 || state.numMonthStay === "12+") {
            setShowFormerAddress(false); // show the former address1
        } else {
            setShowFormerAddress(true); // hide the former address1
            setShowAddress1(false);
        }
    }, [state.numMonthStay]);

    const addFAddress1 = (e) => {
        e.preventDefault();
        setShowAddress1((showAddress1) => !showAddress1); // Toggles the value of showDiv
    };
    const addFAddress2 = (e) => {
        e.preventDefault();
        setShowAddress2((showAddress2) => !showAddress2); // Toggles the value of showDiv
    };


    //Canada Post Implementation
    const loadScript = (callback) => {
        const exists = document.getElementById("scriptCAPostID");
        if (exists) {
            callback();
            return;
        }
        const script = document.createElement("script");
        script.async = true;
        script.id = "scriptCAPostID";
        script.src =
            "https://ws1.postescanada-canadapost.ca/js/addresscomplete-2.10.min.js?key=hj75-yt59-hw92-wf46";
        document.head.appendChild(script);
        script.onload = () => {
            callback();
        };
    };

    const loadStyles = (callback) => {
        const exists = document.getElementById("stylesheetCAPostID");
        if (exists) {
            callback();
            return;
        }
        const link = document.createElement("link");
        link.async = true;
        link.id = "stylesheetCAPostID";
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href =
            "https://ws1.postescanada-canadapost.ca/css/addresscomplete-2.10.min.css?key=hj75-yt59-hw92-wf46";
        document.head.appendChild(link);
        link.onload = () => {
            callback();
        };
    };


    useEffect(() => {                                       //setState is only called within the respective callback functions to 
        // ensure that the state updates are synchronized with the script and stylesheet loading process.
        loadScript(() => {
            setState((prevState) => ({
                ...prevState,
                scriptLoaded: true
            }));
        });
        loadStyles(() => {
            setState((prevState) => ({
                ...prevState,
                stylesLoaded: true
            }));
        })

        //return () => {
        // document.head.removeChild(this.script);
        // document.head.removeChild(this.link);
        // }
    }, []);

    if ({ scriptLoaded: true } && { stylesLoaded: true } && window.pca && window.pca.Address) {
        const fields = [
            {
                element: "bldgSite",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.DEFAULT : null
            },
            {
                element: "bldgStreetAddress",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null,
                /*onChange: (value) => {
                    setState((prevState) => ({
                        ...prevState,
                        bldgStateAddress: document.getElementById("bldgStreetAddrss").value,
                    }));
                   
                },*/
            },
            /*{
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },*/
            {
                element: "bldgCityAddress",
                field: "City",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "bldgStateAddress",
                field: "ProvinceName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            { element: "bldgPostCodeAddress", field: "PostalCode" },
            {
                element: "bldgCountryAddress",
                field: "CountryName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.COUNTRY : null
            },
            {
                element: "bldgMultiUnitAddress",
                field: "{AcMua}",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "bldgResidentialBusinessAddress",
                field: "{AcRbdi}",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            }
        ];

        const options = {
            key: "hj75-yt59-hw92-wf46"
        };


        try {
            const control = new window.pca.Address(fields, options);
        } catch (error) {
            // Handle any potential errors during instantiation
            console.error("Error creating Address control:", error);
        }

        //End of Buidling Property Address Complete
        const currentFields = [
            {
                element: "appCurrentAddress",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.DEFAULT : null
            },
            {
                element: "appCurrentStreetAddress",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            /*{
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },*/
            {
                element: "appCurrentCityAddress",
                field: "City",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "appCurrentProvinceState",
                field: "ProvinceName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            { element: "appCurrentPostalStateAddress", field: "PostalCode" },
            {
                element: "appCurrentCountryAddress",
                field: "CountryName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.COUNTRY : null
            },

        ];

        const optionsCurrent = {
            key: "hj75-yt59-hw92-wf46"
        };


        try {
            const control = new window.pca.Address(currentFields, optionsCurrent);
        } catch (error) {
            // Handle any potential errors during instantiation
            console.error("Error creating Address control:", error);
        }
        // End of Current Address Autocomplete

        const fields1 = [
            {
                element: "appFormerAddress1",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.DEFAULT : null
            },
            {
                element: "appFormerStreetAddress1",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "appFormerCityAddress1",
                field: "City",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "appFormerProvinceStateAddress1",
                field: "ProvinceName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            { element: "appFormerPostalStateAddress1", field: "PostalCode" },
            {
                element: "appFormerCountryAddress1",
                field: "CountryName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.COUNTRY : null
            },

        ];

        const options1 = {
            key: "hj75-yt59-hw92-wf46"
        };


        try {
            const control = new window.pca.Address(fields1, options1);
        } catch (error) {
            // Handle any potential errors during instantiation
            console.error("Error creating Address control:", error);
        }

        /*-- End of Address Complete Former Address 1 -- */

        const fields2 = [
            {
                element: "appFormerAddress2",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.DEFAULT : null
            },
            {
                element: "appFormerStreetAddress2",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            /*{
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },*/
            {
                element: "appFormerCityAddress2",
                field: "City",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "appFormerProvinceState2",
                field: "ProvinceName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            { element: "appFormerPostalStateAddress2", field: "PostalCode" },
            {
                element: "appFormerCountryAddress2",
                field: "CountryName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.COUNTRY : null
            },

        ];

        const options2 = {
            key: "hj75-yt59-hw92-wf46"
        };


        try {
            const control = new window.pca.Address(fields2, options2);
        } catch (error) {
            // Handle any potential errors during instantiation
            console.error("Error creating Address control:", error);
        }

        /*-- End of Address Complete on Former Address 2 -- */

        const fields3 = [
            {
                element: "appFormerAddress3",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.DEFAULT : null
            },
            {
                element: "appFormerStreetAddress3",
                field: "Line1",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            /*{
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },*/
            {
                element: "appFormerCityAddress3",
                field: "City",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            {
                element: "appFormerProvinceState3",
                field: "ProvinceName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },
            { element: "appFormerPostalStateAddress3", field: "PostalCode" },
            {
                element: "appFormerCountryAddress3",
                field: "CountryName",
                mode: window.pca.fieldMode ? window.pca.fieldMode.COUNTRY : null
            },

        ];

        const options3 = {
            key: "hj75-yt59-hw92-wf46"
        };


        try {
            const control = new window.pca.Address(fields3, options3);
        } catch (error) {
            // Handle any potential errors during instantiation
            console.error("Error creating Address control:", error);
        }

        /*-- End of Address Complete on Former Address 3 -- */
    }


    const changeHandlerPayStub = (event) => {
        const file = event.target.files[0];
        setState(prevState => {
            return {
                ...prevState,
                payStubFile: file
            }
        });
    };


    const changeHandlerEmploymentLetter = (event) => {
        const file = event.target.files[0];
        setState(prevState => {
            return {
                ...prevState,
                employerLetter: file
            }
        });
    };

    const changeHandlerUtilityFile = (event) => {
        const file = event.target.files[0];
        setState(prevState => {
            return {
                ...prevState,
                utilityFile: file
            }
        });
    };

    const changeHandlerRenterInsuranceFile = (event) => {
        const file = event.target.files[0];
        setState(prevState => {
            return {
                ...prevState,
                renterInsuranceFile: file
            }
        });
    };








    function mask(o, f) {
        setTimeout(() => {
            const v = f(o.value);
            if (v !== o.value) {
                o.value = v;
            }
        }, 1);
    };
    useEffect(() => {
        const numHyphen = (v) => {
            let r = v.replace(/\D/g, ""); //sanitize non numeric characters

            if (r.length > 9) {
                r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
            } else if (r.length > 4) {
                r = r.replace(/^(\d\d\d)(\d{2})(\d{0,4}).*/, "$1-$2-$3");
            } else if (r.length > 2) {
                r = r.replace(/^(\d\d\d)(\d{0,3})/, "$1-$2");
            } else {
                r = r.replace(/^(\d*)/, "$1");
            }

            return r;
        };

    }, [])
    const setInputFilter = (textbox, inputFilter, errMsg) => {
        [
            "input",
            "keydown",
            "keyup",
            "mousedown",
            "mouseup",
            "select",
            "contextmenu",
            "drop",
            "focusout",
        ].forEach((event) => {
            textbox.addEventListener(event, (e) => {
                if (inputFilter(textbox.value)) {
                    // Accepted value
                    if (["keydown", "mousedown", "focusout"].includes(e.type)) {
                        textbox.classList.remove("input-error");
                        textbox.setCustomValidity("");
                    }
                    textbox.oldValue = textbox.value;
                    textbox.oldSelectionStart = textbox.selectionStart;
                    textbox.oldSelectionEnd = textbox.selectionEnd;
                } else if (textbox.hasOwnProperty("oldValue")) {
                    // Rejected value - restore the previous one
                    textbox.classList.add("input-error");
                    textbox.setCustomValidity(errMsg);
                    textbox.reportValidity();
                    textbox.value = textbox.oldValue;
                    textbox.setSelectionRange(textbox.oldSelectionStart, textbox.oldSelectionEnd);
                } else {
                    // Rejected value - nothing to restore
                    textbox.value = "";
                }
            });
        });

    };


    /*  useEffect(() => {
          numHyphen();
      },[])*/

    // Install input filters.


    useEffect(() => {
        setInputFilter(
            document.getElementById("sincnd"),
            (value) => value === null || /^[\d-*\s]*$/.test(value),
            "Must be a number"
        );
    }, [])






    const onclickToggle = (e) => {
        const ele = document.getElementById("sincnd");
        const str = ele.getAttribute("data-orig");
        //if (ele.value.split("*").length-1  === 7) {
        ele.value = str.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3");
        //} 
        /* ele.value = str.replace(/(\d{3})(\d{2})(\d{4})/, "$1-$2-$3"); */
        console.log(ele.value);

        e.preventDefault();
    }

    const mouseoutMask = () => {
        /* document.getElementById("sin").addEventListener('mousemove', (event) => {
          event.preventDefault();
        }, false); */

        const ele = document.getElementById("sincnd");
        const str = ele.value.replace(/-/g, "");
        const reg = str.slice(0, -2);
        ele.setAttribute("data-orig", str);
        //if (str.length  === 9) {
        const res = str.replace(reg, (m) => "*".repeat(m.length));
        document.getElementById("sincnd").value = res;
        //}
    };

    /*File Upload*/


    const handleSubmission = () => {
        // eslint-disable-next-line no-undef

        // eslint-disable-next-line no-undef

    };


    const handleSubmit = (e) => {

        e.preventDefault();

        //Property Information
        setInputValue(document.getElementById("bldgStreetAddress").value);
        console.log('CompanyName:', state.companyName);
        console.log('Name:', state.agentFirstname);
        console.log('LastName:', state.agentLastname);
        console.log('HousingProvider  Email:', state.housingProviderEmail);
        console.log('bldgSite:', state.bldgSite);
        console.log('bldgInfo:', state.bldgInfo);
        console.log('bldgStreet:', state.bldgStreetAddress);
        console.log('bldgStreetInputRef:', inputValue);
        console.log('bldgCity:', state.bldgCityAddress);
        console.log('bldgState:', state.bldgStateAddress);
        console.log('bldgPostal:', state.bldgPostCodeAddress);
        console.log('bldgUnit:', state.bldgMultiUnitAddress);
        console.log('isResidential:', state.bldgResidentialBusinessAddress);
        console.log('bldgAddress:', state.bldgAddress);
        console.log('leaseTerm:', state.leaseTerm);
        console.log('leaseDate:', state.dateValue);
        //Tenant
        console.log('tenantSal:', state.tenantSal);
        console.log('tenantFirstname:', state.tenantFirstname);
        console.log('tenantInitials:', state.tenantInitials);
        console.log('tenantLastname:', state.tenantLastname);
        console.log('tenantBirthdate:', state.tenantBirthdate);
        console.log('tenantEmail:', state.tenantEmail);
        console.log('sincnd:', state.sincnd);


        //app
        console.log('appCurrentAddress:', state.appCurrentAddress);
        console.log('appMoveInDate:', state.appMoveInDate);
        console.log('HousingProviderName:', state.HousingProviderName);
        console.log('HousingProviderEmail:', state.HousingProviderEmail);
        console.log('HousingProviderPhone:', state.HousingProviderPhone);
        console.log('HousingProviderMobilePhone:', state.HousingProviderMobilePhone);


        console.log('appFormerAddress1', state.appFormerAddress1);
        console.log('numMonthStay', state.numMonthStay);
        console.log('appFormerMoveInDate1:', state.appFormerMoveInDate1);
        console.log('appFormerMoveOutDate1:', state.appFormerMoveOutDate1);
        console.log('FormerHousingProviderName1:', state.FormerHousingProviderName1);
        console.log('FormerHousingProviderEmail1:', state.FormerHousingProviderEmail1);
        console.log('FormerHousingProviderPhone1:', state.FormerHousingProviderPhone1);
        console.log('FormerHousingProviderMobilePhone1:', state.FormerHousingProviderMobilePhone1);


        console.log('appFormerAddress2:', state.appFormerAddress2);
        console.log('appFormerMoveInDate2:', state.appFormerMoveInDate2);
        console.log('appFormerMoveOutDate2:', state.appFormerMoveOutDate2);
        console.log('FormerHousingProviderName2:', state.FormerHousingProviderName2);
        console.log('FormerHousingProviderEmail2:', state.FormerHousingProviderEmail2);
        console.log('FormerHousingProviderPhone2:', state.FormerHousingProviderPhone2);
        console.log('FormerHousingProviderMobilePhone2:', state.FormerHousingProviderMobilePhone2);

        console.log('appFormerAddress3:', state.appFormerAddress3);
        console.log('appFormerMoveInDate3:', state.appFormerMoveInDate3);
        console.log('appFormerMoveOutDate3:', state.appFormerMoveOutDate3);
        console.log('FormerHousingProviderName3:', state.FormerHousingProviderName3);
        console.log('FormerHousingProviderEmail3:', state.FormerHousingProviderEmail3);
        console.log('FormerHousingProviderPhone3:', state.FormerHousingProviderPhone3);
        console.log('FormerHousingProviderMobilePhone3:', state.FormerHousingProviderMobilePhone3);

        console.log('lengthEmployment:', state.lengthEmployment);
        console.log('incomeSource:', state.lengthEmployment);
        console.log('employerCompanyName:', state.employerCompanyName);
        console.log('employerContactName:', state.employerContactName);
        console.log('employerContactPhone:', state.employerContactPhone);
        console.log('employeeField:', state.employeeField);
        console.log('employeePosition:', state.employeePosition);
        console.log('employmentMonthlyGross:', state.employmentMonthlyGross);
        console.log('otherSourceMonthlyGross:', state.otherSourceMonthlyGross);

    };


    /* useEffect(() => {
         const hiddenInputElement = document.getElementById('example-datepicker');
         console.log(hiddenInputElement.value); // ISO String, ex: "2016-11-19T12:00:00.000Z"
         console.log(hiddenInputElement.getAttribute('data-formattedvalue')); // Formatted String, ex: "11/19/2016"
     }, [state.value]);*/


    return (
        <div>
            <h2>Start Residential Tenancy Application Form</h2>


            {/*<h4>Part I: Housing Provider and Property Information</h4>*/}




            <br />
            <Form>
                <div>
                    <h4 className="infoMarkers">Part I: Housing Provider and Property Information</h4>
                    <div>
                        <Label for="ProviderInformation" className="ProviderInformation" sm={6} >
                            <strong>Housing Provider Information</strong>
                        </Label>
                    </div>
                    <br />
                    <FormGroup row>


                        <Label for="companyName" className="companyName" sm={2} >
                            Company Name
                        </Label>

                        <Col sm={10}>
                            <Input
                                id="companyName"
                                name="companyName"
                                value={state.companyName}
                                onChange={handleChange}
                                placeholder="with a placeholder"
                                type="text"
                                className="inputCompanyName"
                            />
                        </Col>


                    </FormGroup>


                    <FormGroup row>

                        <Label for="Leasing" className="Leasing" md={2} >
                            <strong>Leasing Agent</strong>

                        </Label>

                        <Label for="agentFirstname" className="agentFirstname mr-0" md={2} >
                            First Name
                        </Label>

                        <Col md={3}>
                            <Input
                                id="exampleEmail"
                                name="agentFirstname"
                                value={state.agentFirstname}
                                placeholder="with a placeholder"
                                type="text"
                                onChange={handleChange}
                                className="inputAgentFirstName"
                            />
                        </Col>
                        <Label for="agentLastname" className="agentLastname" sm={2} >
                            Last Name
                        </Label>
                        <Col md={3}>
                            <Input
                                id="agentLastname"
                                name="agentLastname"
                                value={state.agentLastname}
                                placeholder="with a placeholder"
                                onChange={handleChange}
                                type="text"
                                className="inputAgentLastName"
                            />
                        </Col>

                    </FormGroup>
                    <FormGroup row>

                        <Label for="housingProviderEmail" className="housingProviderEmail" md={2} >
                            <strong>Email Address:</strong>
                        </Label>

                        <Col md={10}>
                            <Input
                                id="housingProviderEmail"
                                name="housingProviderEmail"
                                value={state.housingProviderEmail}
                                placeholder="with a placeholder"
                                type="email"
                                onChange={handleChange}
                                className="inputHousingProviderEmail"
                            />
                        </Col>

                    </FormGroup>
                    <div>
                        <h6 className="ProviderInformation" sm={6} >
                            <strong>Rental Unit Information</strong>
                        </h6>
                    </div>

                    <FormGroup row>

                        <Label for="bldgSite" className="bldgSite" md={2} >
                            Building Site
                        </Label>

                        <Col md={10}>
                            <Input
                                id="bldgSite"
                                name="bldgSite"
                                value={state.bldgSite}
                                placeholder="Apartment, studio, or floor"
                                type="text"
                                onChange={handleChange}
                                className="inputBuildingSite"
                            />
                        </Col>

                    </FormGroup>
                    <FormGroup row>

                        <Col md={4}>
                            <Label for="bldgStreetAddress" className="bldgStreetAddress" >
                                Street:
                            </Label>
                            <Input
                                id="bldgStreetAddress"

                                ref={inputRef}
                                name="bldgStreetAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgStreetAddress}
                                onChange={handleChange}
                                className="inputbldgStreetAddress"
                            />


                        </Col>

                        <Col md={2}>
                            <Label for="bldgCityAddress" className="bldgCityAddress" >
                                City:
                            </Label>
                            <Input
                                id="bldgCityAddress"
                                name="bldgCityAddress"
                                placeholder=""
                                type="text"
                                onChange={handleChange}
                                value={state.bldgCityAddress}

                                className="inputbldgCityAddress"
                            />


                        </Col>


                        <Col md={2}>
                            <Label for="bldgStateAddress" className="bldgStateAddress" >
                                Province/State:
                            </Label>
                            <Input
                                id="bldgStateAddress"
                                name="bldgStateAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgStateAddress}
                                onChange={handleChange}
                                className="inputbldgStateAddress"
                            />


                        </Col>
                        <Col md={2}>
                            <Label for="bldgPostCodeAddress" className="bldgPostCodeAddress" >
                                Postal Code:
                            </Label>
                            <Input
                                id="bldgPostCodeAddress"
                                name="bldgPostCodeAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgPostCodeAddress}
                                onChange={handleChange}
                                className="inputbldgPostCodeAddress"
                            />

                        </Col>
                        <Col md={2}>
                            <Label for="bldgCountryAddress" className="bldgCountryAddress" >
                                Country:
                            </Label>
                            <Input
                                id="bldgCountryAddress"
                                name="bldgCountryAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgCountryAddress}
                                onChange={handleChange}
                                className="inputbldgCountryAddress"
                            />

                        </Col>

                    </FormGroup>

                    <FormGroup row>
                        <Col md={2}>
                            <Label for="bldgMultiUnitAddress" className="bldgMultiUnitAddress" >
                                No of Units:
                            </Label>
                            <Input
                                id="bldgMultiUnitAddress"
                                name="bldgMultiUnitAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgMultiUnitAddress}
                                onChange={handleChange}
                                className="inputbldgMultiUnitAddress"
                            />

                        </Col>
                        <Col md={2}>
                            <Label for="bldgResidentialBusinessAddress" className="bldgResidentialBusinessAddress" >
                                Residential/Business:
                            </Label>
                            <Input
                                id="bldgResidentialBusinessAddress"
                                name="bldgResidentialBusinessAddress"
                                placeholder=""
                                type="text"
                                value={state.bldgResidentialBusinessAddress}
                                onChange={handleChange}
                                className="inputbldgResidentialBusinessAddress"
                            />

                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Label
                            for="buildingInfo"

                            md={4}
                        >
                            How did you hear about this rental?
                        </Label>
                        <Col md={8}>
                            <Input
                                id="buildingInfo"
                                name="buildingInfo"
                                value={state.buildingInfo}
                                className="inputbuildingInfo"
                                type="select"
                                onChange={handleChange}

                            >
                                <option>
                                    1
                                </option>
                                <option>
                                    2
                                </option>
                                <option>
                                    3
                                </option>
                                <option>
                                    4
                                </option>
                                <option>
                                    5
                                </option>
                            </Input>
                        </Col>
                    </FormGroup>


                    <FormGroup row>

                        <Label for="buildingAddress" className="buildingAddress" md={2} >
                            Address
                        </Label>

                        <Col md={10}>
                            <Input
                                id="buildingAddress"
                                name="buildingAddress"
                                value={state.buildingAddress}
                                placeholder="Building Site Address"
                                type="text"
                                onChange={handleChange}
                                className="inputBuildingAddress"
                            />
                        </Col>

                    </FormGroup>

                    <Row>
                        <Col md={3}>
                            <FormGroup>
                                <Label for="leaseTerm">
                                    Lease Term
                                </Label>
                                <Input
                                    id="leaseTerm"
                                    name="leaseTerm"
                                    value={state.leaseTerm}
                                    type="select"
                                    onChange={handleChange}
                                >
                                    <option>
                                        Monthly
                                    </option>
                                    <option>
                                        Semiannually
                                    </option>
                                    <option>
                                        Yearly
                                    </option>
                                    <option>
                                        2 Years
                                    </option>
                                    <option>
                                        3 Years
                                    </option>
                                </Input>
                            </FormGroup>
                        </Col>
                        <Col md={4}>

                            <FormGroup>
                                <Label for="exampleDate">
                                    When would you like to move in?
                                </Label>
                                <Input
                                    type="date"
                                    name="dateValue"
                                    value={state.dateValue}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                        <Col md={5}>

                            <Label for="leaseReportRadio" >
                                Send me my free leasing history report and score?
                            </Label >
                            <Row className="row-cols-lg-auto ml-3 align-self-baseline">
                                <FormGroup check className="leaseReportRadio">

                                    <Input
                                        name="sendFreeReport"
                                        type="radio"
                                        value="true"
                                        checked={state.sendFreeReport === "true"}
                                        onChange={handleChange}
                                    />
                                    <Label check>
                                        Yes
                                    </Label>


                                </FormGroup>

                                {' '}

                                <FormGroup check className="leaseReportRadio">
                                    <Input
                                        name="sendFreeReport"
                                        type="radio"
                                        value="false"
                                        checked={state.sendFreeReport === "false"}
                                        onChange={handleChange}

                                    />
                                    <Label check>
                                        No
                                    </Label>
                                </FormGroup>
                            </Row>
                        </Col>

                    </Row>
                </div>
                <br />
                <div>
                    <h4 className="infoMarkers">Part II: Personal Information</h4>
                    <br />

                    <FormGroup row>
                        <Col md={2}>
                            <Label
                                for="tenantSal"
                            >
                                Sal
                            </Label>

                            <Input
                                id="tenantSal"
                                name="tenantSal"
                                value={state.tenantSal}
                                className="inputTenantSal"
                                type="select"
                                onChange={handleChange}
                            >
                                <option>
                                    Mr
                                </option>
                                <option>
                                    Mrs
                                </option>
                                <option>
                                    Non-binary
                                </option>
                                <option>
                                    Prefer not to respond.
                                </option>

                            </Input>
                        </Col>
                        <Col md={3}>
                            <Label for="tenantFirstname" className="tenantFirstname" >
                                First Name
                            </Label>
                            <Input
                                id="tenantFirstname"
                                name="tenantFirstname"
                                value={state.tenantFirstname}
                                placeholder="with a placeholder"
                                type="text"
                                onChange={handleChange}
                                className="inputTenantFirstName"
                            />
                        </Col>
                        <Col md={1}>
                            <Label for="tenantInitials" className="tenantInitals" >
                                Initials
                            </Label>
                            <Input
                                id="tenantInitials"
                                name="tenantInitials"
                                value={state.tenantInitials}
                                placeholder="with a placeholder"
                                onChange={handleChange}
                                type="text"
                                className="inputTenantInitials"
                            />

                        </Col>

                        <Col md={3}>
                            <Label for="tenantLastname" className="tenantLastname" >
                                Last Name
                            </Label>
                            <Input
                                id="tenantLastname"
                                name="tenantLastname"
                                value={state.tenantLastname}
                                placeholder="with a placeholder"
                                onChange={handleChange}
                                type="text"
                                className="inputTenantLastName"
                            />

                        </Col>

                        <Col md={3}>
                            <FormGroup>

                                <Label for="tenantBirthdate: ">
                                    When would you like to move in?
                                </Label>
                                <Input
                                    type="date"
                                    name="tenantBirthdate "
                                    value={state.datetenantBirthdate}
                                    onChange={handleChange}
                                />
                            </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={4}>
                            <Label
                                for="tenantEmail"
                            >
                                Email Address
                            </Label>

                            <Input
                                id="tenantEmail"
                                name="tenantEmail"
                                value={state.tenantEmail}
                                placeholder="with a placeholder"
                                type="email"
                                onChange={handleChange}
                                className="inputTenantEmail"
                            />

                        </Col>
                        <Col md={4}>
                            <Label for="sincnd" className="sincnd" >
                                SIN / SSN
                            </Label>
                            <Input
                                id="sincnd"
                                name="sincnd"

                                placeholder="SIN 123-45-6789"
                                type="text"
                                onChange={handleChange}
                                onClick={onclickToggle}
                                onBlur={mouseoutMask}
                                //onKeyUp={mask(this, numHyphen)}
                                maxLength="9"
                                className="inputSinCND"
                            />
                        </Col>
                    </FormGroup>


                </div>

                <br />

                <div>
                    <h4 className="infoMarkers">Part III: Residence(s) Information</h4>
                    <br />
                    <h6><strong>Current Address</strong></h6>
                    <p className="currentAddressHeader"><span className="astCurrentAddress">*</span>Applicant's Current Address</p>
                    <Input
                        id="appCurrentAddress"
                        name="appCurrentAddress"
                        //value={state.appCurrentAddress}
                        placeholder="with a placeholder"
                        type="text"
                        //onChange={handleChange}
                        className="inputAppCurrentAddress"
                    />

                    <br />
                    <FormGroup row>

                        <Col md={4}>
                            <Label for="appCurrentStreetAddress" className="appCurrentStreetAddress" >
                                Street:
                            </Label>
                            <Input
                                id="appCurrentStreetAddress"
                                name="appCurrentStreetAddress"
                                placeholder=""
                                type="text"
                                value={state.appCurrentStreetAddress}
                                onChange={handleChange}
                                className="inputappCurrentStreetAddress"
                            />
                        </Col>

                        <Col md={2}>
                            <Label for="appCurrentCityAddress" className="appCurrentCityAddress" >
                                City:
                            </Label>
                            <Input
                                id="appCurrentCityAddress"
                                name="appCurrentCityAddress"
                                placeholder=""
                                type="text"
                                onChange={handleChange}
                                value={state.appCurrentCityAddress}

                                className="inputAppCurrentCityAddress"
                            />


                        </Col>


                        <Col md={2}>
                            <Label for="appCurrentProvinceState" className="appCurrentProvinceState" >
                                Province/State:
                            </Label>
                            <Input
                                id="appCurrentProvinceState"
                                name="appCurrentProvinceState"
                                placeholder=""
                                type="text"
                                value={state.appCurrentProvinceState}
                                onChange={handleChange}
                                className="inputAppCurrentProvinceState"
                            />


                        </Col>
                        <Col md={2}>
                            <Label for="appCurrentPostalStateAddress" className="appCurrentPostalStateAddress" >
                                Postal Code:
                            </Label>
                            <Input
                                id="appCurrentPostalStateAddress"
                                name="appCurrentPostalStateAddress"
                                placeholder=""
                                type="text"
                                value={state.appCurrentPostalStateAddress}
                                onChange={handleChange}
                                className="inputAppCurrentPostalStateAddress"
                            />

                        </Col>
                        <Col md={2}>
                            <Label for="appCurrentCountryAddress" className="appCurrentCountryAddress" >
                                Country:
                            </Label>
                            <Input
                                id="appCurrentCountryAddress"
                                name="appCurrentCountryAddress"
                                placeholder=""
                                type="text"
                                value={state.appCurrentCountryAddress}
                                onChange={handleChange}
                                className="inputppCurrentCountryAddress"
                            />

                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Col md={2}>
                            <Label
                                for="applicantMoveInDate: "
                            >
                                No of Months:
                            </Label>
                            <Input
                                id="numMonthStay"
                                name="numMonthStay"
                                value={state.numMonthStay}
                                type="select"
                                onChange={handleSelectnumMonthsChange}
                            >
                                {/*{numMonths.map((number) => (
                                    <option key={number} value={number}>{number}</option>
                                ))}*/}
                                {renderOptions()}
                            </Input>


                        </Col>
                        <Col md={3}>
                            <Label
                                for="applicantMoveInDate: "
                            >
                                Move in Month/Year:
                            </Label>

                            <Input
                                id="applicantMoveInDate"
                                name="applicantMoveInDate"
                                value={state.applicantMoveInDate}
                                placeholder="MM / YY"
                                type="text"
                                onChange={handleChange}
                                className="inputApplicantMoveInDate"
                            />

                        </Col>
                        <br />
                        <Col md={4}>
                            <Label for="HousingProviderName" className="HousingProviderName" >
                                Housing Provider Name:
                            </Label>
                            <Input
                                id="HousingProviderName"
                                name="HousingProviderName"
                                placeholder=""
                                type="text"
                                value={state.HousingProviderName}
                                onChange={handleChange}
                                className="inputHousingProviderName"
                            />
                        </Col>
                        <Col md={3}>
                            <Label for="HousingProviderEmail" className="HousingProviderEmail" >
                                Housing Provider Email Address:
                            </Label>
                            <Input
                                id="HousingProviderEmail"
                                name="HousingProviderEmail"
                                placeholder=""
                                type="email"
                                value={state.HousingProviderEmail}
                                onChange={handleChange}
                                className="inputHousingProviderEmail"
                            />
                        </Col>
                    </FormGroup>
                </div>

                {showFormerAddress
                    &&
                    <div>

                        <p className="appFormerAddress1"><strong>Former Address 1</strong></p>
                        <Input
                            id="appFormerAddress1"
                            name="appFormerAddress1"
                            //value={state.appFormerAddress1}
                            placeholder="with a placeholder"
                            type="text"
                            // onChange={handleChange}
                            className="inputappFormerAddress1"
                        />
                        <br />
                        <FormGroup row>

                            <Col md={4}>
                                <Label for="appFormerStreetAddress1" className="appFormerStreetAddress1" >
                                    Street:
                                </Label>
                                <Input
                                    id="appFormerStreetAddress1"
                                    name="appFormerStreetAddress1"
                                    placeholder=""
                                    type="text"
                                    value={state.appFormerStreetAddress1}
                                    onChange={handleChange}
                                    className="inputappFormerStreetAddress1"
                                    required
                                />


                            </Col>

                            <Col md={2}>
                                <Label for="appFormerCityAddress1" className="appFormerCityAddress1" >
                                    City:
                                </Label>
                                <Input
                                    id="appFormerCityAddress1"
                                    name="appFormerCityAddress1"
                                    placeholder=""
                                    type="text"
                                    onChange={handleChange}
                                    value={state.appFormerCityAddress1}
                                    className="inputappFormerCityAddress1"
                                    required
                                />


                            </Col>


                            <Col md={2}>
                                <Label for="appFormerProvinceState1" className="appFormerProvinceState1" >
                                    Province/State:
                                </Label>
                                <Input
                                    id="appFormerProvinceState1"
                                    name="appFormerProvinceState1"
                                    placeholder=""
                                    type="text"
                                    value={state.appFormerProvinceState1}
                                    onChange={handleChange}
                                    className="inputappFormerProvinceState1"
                                    required
                                />


                            </Col>
                            <Col md={2}>
                                <Label for="appFormerPostalStateAddress1" className="appFormerPostalStateAddress1" >
                                    Postal Code:
                                </Label>
                                <Input
                                    id="appFormerPostalStateAddress1"
                                    name="appFormerPostalStateAddress1"
                                    placeholder=""
                                    type="text"
                                    value={state.appFormerPostalStateAddress1}
                                    onChange={handleChange}
                                    className="inputappFormerPostalStateAddress1"
                                    required
                                />

                            </Col>
                            <Col md={2}>
                                <Label for="appFormerCountryAddress1" className="appFormerCountryAddress1" >
                                    Country:
                                </Label>
                                <Input
                                    id="appFormerCountryAddress1"
                                    name="appFormerCountryAddress1"
                                    placeholder=""
                                    type="text"
                                    value={state.appFormerCountryAddress1}
                                    onChange={handleChange}
                                    className="inputappFormerCountryAddress1"
                                    required
                                />

                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Col md={3}>
                                <Label
                                    for="appMoveInDate1"
                                >
                                    Move In Month/Year:
                                </Label>

                                <Input
                                    id="appMoveInDate1"
                                    name="appMoveInDate1"
                                    value={state.appMoveInDate1}
                                    placeholder="MM / YY"
                                    type="text"
                                    onChange={handleChange}
                                    className="inputappMoveInDate1"
                                />

                            </Col>
                            <Col md={3}>
                                <Label
                                    for="appFormerMoveOutDate1"
                                >
                                    Move Out  Month/Year:
                                </Label>

                                <Input
                                    id="appFormerMoveOutDate1"
                                    name="appFormerMoveOutDate1"
                                    value={state.appFormerMoveOutDate1}
                                    placeholder="MM / YY"
                                    type="text"
                                    onChange={handleChange}
                                    className="inputappFormerMoveOutDate1"
                                />

                            </Col>

                            <Col md={3}>
                                <Label for="FormerHousingProviderName1" className="FormerHousingProviderName1" >
                                    Housing Provider Name:
                                </Label>
                                <Input
                                    id="FormerHousingProviderName1"
                                    name="FormerHousingProviderName1"
                                    placeholder=""
                                    type="text"
                                    value={state.FormerHousingProviderName1}
                                    onChange={handleChange}
                                    className="inputFormerHousingProviderName1"
                                />
                            </Col>
                            <Col md={3}>
                                <Label for="HousingProviderEmail" className="FormerHousingProviderEmail1" >
                                    Housing Provider Email Address:
                                </Label>
                                <Input
                                    id="FormerHousingProviderEmail1"
                                    name="FormerHousingProviderEmail1"
                                    placeholder=""
                                    type="email"
                                    value={state.FormerHousingProviderEmail1}
                                    onChange={handleChange}
                                    className="inputFormerHousingProviderEmail1"
                                />
                            </Col>
                        </FormGroup>

                    </div>

                }
                {!showAddress1 && <p className="AddFormerAddress1" onClick={addFAddress1}>+ Add more address</p>} {/*Tae*/}
                <div>



                    {showAddress1 &&
                        <div>
                            <p className="AddFormerAddress1" onClick={addFAddress1}>- Delete address</p>
                            <p className="appFormerAddress2"><strong>Former Address 2</strong></p>
                            <Input
                                id="appFormerAddress2"
                                name="appFormerAddress2"
                                //value={state.appFormerAddress2}
                                placeholder="with a placeholder"
                                type="text"
                                //onChange={handleChange}
                                className="inputappFormerAddress2"
                            />
                            <br />
                            <FormGroup row>

                                <Col md={4}>
                                    <Label for="appFormerStreetAddress2" className="appFormerStreetAddress2" >
                                        Street:
                                    </Label>
                                    <Input
                                        id="appFormerStreetAddress2"
                                        name="appFormerStreetAddress2"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerStreetAddress2}
                                        onChange={handleChange}
                                        className="inputappFormerStreetAddress2"
                                    />


                                </Col>

                                <Col md={2}>
                                    <Label for="appFormerCityAddress2" className="appFormerCityAddress2" >
                                        City:
                                    </Label>
                                    <Input
                                        id="appFormerCityAddress2"
                                        name="appFormerCityAddress2"
                                        placeholder=""
                                        type="text"
                                        onChange={handleChange}
                                        value={state.appFormerCityAddress2}

                                        className="inputappFormerCityAddress2"
                                    />


                                </Col>


                                <Col md={2}>
                                    <Label for="appFormerProvinceState2" className="appFormerProvinceState2" >
                                        Province/State:
                                    </Label>
                                    <Input
                                        id="appFormerProvinceState2"
                                        name="appFormerProvinceState2"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerProvinceState2}
                                        onChange={handleChange}
                                        className="inputappFormerProvinceState2"
                                    />


                                </Col>
                                <Col md={2}>
                                    <Label for="appFormerPostalStateAddress2" className="appFormerPostalStateAddress2" >
                                        Postal Code:
                                    </Label>
                                    <Input
                                        id="appFormerPostalStateAddress2"
                                        name="appFormerPostalStateAddress2"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerPostalStateAddress2}
                                        onChange={handleChange}
                                        className="inputappFormerPostalStateAddress2"
                                    />

                                </Col>
                                <Col md={2}>
                                    <Label for="appFormerCountryAddress2" className="appFormerCountryAddress2" >
                                        Country:
                                    </Label>
                                    <Input
                                        id="appFormerCountryAddress2"
                                        name="appFormerCountryAddress2"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerCountryAddress2}
                                        onChange={handleChange}
                                        className="inputappFormerCountryAddress2"
                                    />

                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col md={3}>
                                    <Label
                                        for="appMoveInDate2"
                                    >
                                        Move In Month/Year:
                                    </Label>

                                    <Input
                                        id="appMoveInDate2"
                                        name="appMoveInDate2"
                                        value={state.appMoveInDate2}
                                        placeholder="MM / YY"
                                        type="text"
                                        onChange={handleChange}
                                        className="inputappMoveInDate2"
                                    />

                                </Col>
                                <Col md={3}>
                                    <Label
                                        for="appFormerMoveOutDate2"
                                    >
                                        Move Out  Month/Year:
                                    </Label>

                                    <Input
                                        id="appFormerMoveOutDate2"
                                        name="appFormerMoveOutDate2"
                                        value={state.appFormerMoveOutDate2}
                                        placeholder="MM / YY"
                                        type="text"
                                        onChange={handleChange}
                                        className="inputappFormerMoveOutDate2"
                                    />

                                </Col>

                                <Col md={3}>
                                    <Label for="FormerHousingProviderName2" className="FormerHousingProviderName2" >
                                        Housing Provider Name:
                                    </Label>
                                    <Input
                                        id="FormerHousingProviderName2"
                                        name="FormerHousingProviderName2"
                                        placeholder=""
                                        type="text"
                                        value={state.FormerHousingProviderName2}
                                        onChange={handleChange}
                                        className="inputFormerHousingProviderName2"
                                    />
                                </Col>
                                <Col md={3}>
                                    <Label for="HousingProviderEmail2" className="FormerHousingProviderEmail2" >
                                        Housing Provider Email Address:
                                    </Label>
                                    <Input
                                        id="FormerHousingProviderEmail2"
                                        name="FormerHousingProviderEmail2"
                                        placeholder=""
                                        type="email"
                                        value={state.FormerHousingProviderEmail2}
                                        onChange={handleChange}
                                        className="inputFormerHousingProviderEmail2"
                                    />
                                </Col>
                            </FormGroup>
                            {!showAddress2 &&
                                <p className="AddFormerAddress2" onClick={addFAddress2}>+ Add more address</p>
                            }

                        </div>
                    }
                </div>


                {showAddress2 &&

                    <div>
                        <div>
                            <p className="AddFormerAddress1" onClick={addFAddress2}>- Delete address</p>
                            <p className="appFormerAddress3"><strong>Former Address 3</strong></p>
                            <Input
                                id="appFormerAddress3"
                                name="appFormerAddress3"
                                //value={state.appFormerAddress3}
                                placeholder="with a placeholder"
                                type="text"
                                //onChange={handleChange}
                                className="inputappFormerAddress3"
                            />
                            <br />
                            <FormGroup row>

                                <Col md={4}>
                                    <Label for="appFormerStreetAddress3" className="appFormerStreetAddress3" >
                                        Street:
                                    </Label>
                                    <Input
                                        id="appFormerStreetAddress3"
                                        name="appFormerStreetAddress3"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerStreetAddress3}
                                        onChange={handleChange}
                                        className="inputappFormerStreetAddress3"
                                    />


                                </Col>

                                <Col md={2}>
                                    <Label for="appFormerCityAddress3" className="appFormerCityAddress3" >
                                        City:
                                    </Label>
                                    <Input
                                        id="appFormerCityAddress3"
                                        name="appFormerCityAddress3"
                                        placeholder=""
                                        type="text"
                                        onChange={handleChange}
                                        value={state.appFormerCityAddress3}

                                        className="inputappFormerCityAddress3"
                                    />


                                </Col>


                                <Col md={2}>
                                    <Label for="appFormerProvinceState3" className="appFormerProvinceState3" >
                                        Province/State:
                                    </Label>
                                    <Input
                                        id="appFormerProvinceState3"
                                        name="appFormerProvinceState3"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerProvinceState1}
                                        onChange={handleChange}
                                        className="inputappFormerProvinceState3"
                                    />


                                </Col>
                                <Col md={2}>
                                    <Label for="appFormerPostalStateAddress3" className="appFormerPostalStateAddress3" >
                                        Postal Code:
                                    </Label>
                                    <Input
                                        id="appFormerPostalStateAddress3"
                                        name="appFormerPostalStateAddress3"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerPostalStateAddress3}
                                        onChange={handleChange}
                                        className="inputappFormerPostalStateAddress3"
                                    />

                                </Col>
                                <Col md={2}>
                                    <Label for="appFormerCountryAddress3" className="appFormerCountryAddress3" >
                                        Country:
                                    </Label>
                                    <Input
                                        id="appFormerCountryAddress3"
                                        name="appFormerCountryAddress3"
                                        placeholder=""
                                        type="text"
                                        value={state.appFormerCountryAddress3}
                                        onChange={handleChange}
                                        className="inputappFormerCountryAddress3"
                                    />

                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Col md={3}>
                                    <Label
                                        for="applicantMoveInDate3"
                                    >
                                        Move In Month/Year:
                                    </Label>

                                    <Input
                                        id="applicantMoveInDate3"
                                        name="applicantMoveInDate3"
                                        value={state.applicantMoveInDate3}
                                        placeholder="MM / YY"
                                        type="text"
                                        onChange={handleChange}
                                        className="inputApplicantMoveInDate3"
                                    />

                                </Col>
                                <Col md={3}>
                                    <Label
                                        for="applicantFormerMoveOutDate3"
                                    >
                                        Move Out  Month/Year:
                                    </Label>

                                    <Input
                                        id="applicantFormerMoveOutDate3"
                                        name="applicantFormerMoveOutDate3"
                                        value={state.applicantFormerMoveOutDate3}
                                        placeholder="MM / YY"
                                        type="text"
                                        onChange={handleChange}
                                        className="inputapplicantFormerMoveOutDate3"
                                    />

                                </Col>

                                <Col md={3}>
                                    <Label for="FormerHousingProviderName3" className="FormerHousingProviderName3" >
                                        Housing Provider Name:
                                    </Label>
                                    <Input
                                        id="FormerHousingProviderName3"
                                        name="FormerHousingProviderName3"
                                        placeholder=""
                                        type="text"
                                        value={state.FormerHousingProviderName3}
                                        onChange={handleChange}
                                        className="inputFormerHousingProviderName3"
                                    />
                                </Col>
                                <Col md={3}>
                                    <Label for="HousingProviderEmail3" className="FormerHousingProviderEmail3" >
                                        Housing Provider Email Address:
                                    </Label>
                                    <Input
                                        id="FormerHousingProviderEmail3"
                                        name="FormerHousingProviderEmail3"
                                        placeholder=""
                                        type="email"
                                        value={state.FormerHousingProviderEmail3}
                                        onChange={handleChange}
                                        className="inputFormerHousingProviderEmail3"
                                    />
                                </Col>
                            </FormGroup>

                        </div>
                        <div>
                            <h4 className="infoMarkers">Part IV: Employment/ Income Sources</h4>
                            <br />
                            <h6><strong>Current Employment Information</strong></h6>


                            <br />
                            <FormGroup row>

                                <Col md={3}>
                                    <Label
                                        for="lengthEmployment"
                                    >
                                        Lenght of Employment:
                                    </Label>

                                    <Input
                                        id="lengthEmployment"
                                        name="lengthEmployment"
                                        value={state.lengthEmployment}
                                        placeholder=""
                                        type="text"
                                        onChange={handleChange}
                                        className="inputLengthEmployment"
                                    />

                                </Col>
                                <br />
                                <Col md={{
                                    offset: 4,
                                    size: 5
                                }}>
                                    <Label for="incomeSource" className="incomeSource" >
                                        Income Source:
                                    </Label>
                                    <Input
                                        id="incomeSource"
                                        name="incomeSource"
                                        placeholder="Employment/Freelance/Business"
                                        type="text"
                                        value={state.incomeSource}
                                        onChange={handleChange}
                                        className="incomeSource"
                                    />
                                </Col>
                                <br />

                            </FormGroup>
                            <FormGroup row>


                                <Col md={4}>
                                    <Label for="employerCompanyName" className="employerCompanyName" >
                                        Employer/Company Name:
                                    </Label>
                                    <Input
                                        id="employerCompanyName"
                                        name="employerCompanyName"
                                        placeholder=""
                                        type="text"
                                        value={state.employerCompanyName}
                                        onChange={handleChange}
                                        className="inputemployerCompanyName"
                                        required
                                    />
                                </Col>
                                <Col md={4}>
                                    <Label for="employerContactName" className="employerContactName" >
                                        Contact Name:
                                    </Label>
                                    <Input
                                        id="employerContactName"
                                        name="employerContactName"
                                        placeholder=""
                                        type="text"
                                        value={state.employerContactName}
                                        onChange={handleChange}
                                        className="employerContactName"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Label for="employerContactPhone" className="employerContactPhone" >
                                        Contact Phone:
                                    </Label>
                                    <Input
                                        id="employerContactPhone"
                                        name="employerContactPhone"
                                        placeholder=""
                                        type="text"
                                        value={state.employerContactPhone}
                                        onChange={handleChange}
                                        className="inputEmployerContactPhone"
                                    />
                                </Col>
                            </FormGroup>


                            <FormGroup row>

                                <Col md={2}>
                                    <Label for="employeeField" className="employeeField" >
                                        Field:
                                    </Label>
                                    <Input
                                        id="employeeField"
                                        name="employeeField"
                                        placeholder=""
                                        type="text"
                                        value={state.employeeField}
                                        onChange={handleChange}
                                        className="inputEmployeeField"
                                    />
                                </Col>
                                <Col md={3}>
                                    <Label for="employeePosition" className="employeePosition" >
                                        Position:
                                    </Label>
                                    <Input
                                        id="employeePosition"
                                        name="employeePosition"
                                        placeholder=""
                                        type="text"
                                        value={state.employeePosition}
                                        onChange={handleChange}
                                        className="inputEmployeePosition"
                                    />
                                </Col>
                                <Col md={3}>
                                    <Label for="employmentMonthlyGross" className="employmentMonthlyGross" >
                                        Monthly Gross Income:
                                    </Label>
                                    <Input
                                        id="employmentMonthlyGross"
                                        name="employmentMonthlyGross"
                                        placeholder="$"
                                        type="text"
                                        value={state.employmentMonthlyGross}
                                        onChange={handleChange}
                                        className="inputEmploymentMonthlyGross"
                                    />
                                </Col>
                                <Col md={4}>
                                    <Label for="otherSourceMonthlyGross" className="otherSourceMonthlyGross" >
                                        Monthly income from Other Sources:
                                    </Label>
                                    <Input
                                        id="otherSourceMonthlyGross"
                                        name="otherSourceMonthlyGross"
                                        placeholder="$"
                                        type="text"
                                        value={state.otherSourceMonthlyGross}
                                        onChange={handleChange}
                                        className="inputOtherSourceMonthlyGross"
                                    />
                                </Col>

                            </FormGroup>

                        </div>
                    </div>}

                <br />

                <div>
                    <h4 className="infoMarkers">Part V: Document Upload</h4>

                    <br />
                    <FormGroup row>

                        <Col md={3}>
                            <Label for="payStubFile" className="payStubFile" >
                                Pay Stub:
                            </Label>
                            <Input
                                id="payStubFile"
                                name="payStubFile"
                                placeholder=""
                                type="text"
                                value={state.payStubFile && state.payStubFile.name}   //conditional rendering syntax ensure that value is only rendered when payStubFile is truthy (i.e., not null or undefined). 
                                //This way, you avoid trying to access the name property of a non-existent object.
                                onChange={handleChange}

                                className="inputpayStubFile"
                            />
                            <input type="file" id="payStubFile" onChange={changeHandlerPayStub} />

                        </Col>

                        <Col md={3}>
                            <Label for="employerLetter" className="employerLetter" >
                                Employment Letter:
                            </Label>
                            <Input
                                id="employerLetter"
                                name="employerLetter"
                                placeholder=""
                                type="text"
                                onChange={handleChange}
                                value={state.employerLetter && state.employerLetter.name}

                                className="inputemployerLetter"
                            />
                            <input type="file" id="employerLetter" onChange={changeHandlerEmploymentLetter} />

                        </Col>


                        <Col md={3}>
                            <Label for="utilityFile" className="utilityFile" >
                                Utility Bill:
                            </Label>
                            <Input
                                id="utilityFile"
                                name="utilityFile"
                                placeholder=""
                                type="text"
                                value={state.utilityFile && state.utilityFile.name}
                                onChange={handleChange}
                                className="inputUtilityFile"
                            />
                            <input type="file" name="file" id="utilityFile" onChange={changeHandlerUtilityFile} />

                        </Col>
                        <Col md={3}>
                            <Label for="renterInsuranceFile" className="renterInsuranceFile" >
                                Renter's Insurance:
                            </Label>
                            <Input
                                id="renterInsuranceFile"
                                name="renterInsuranceFile"
                                placeholder=""
                                type="text"
                                value={state.renterInsuranceFile && state.renterInsuranceFile.name}
                                onChange={handleChange}
                                className="inputUtilityFile"
                            />
                            <input type="file" name="file" id="renterInsuranceFile" onChange={changeHandlerRenterInsuranceFile} />

                        </Col>
                    </FormGroup>

                </div>

                <Button onSubmit={handleSubmit}>
                    Submit
                </Button>



            </Form>
            <br />




        </div>

    );
}

