import React, { useState, useRef,useEffect, useCallback } from 'react';
import './Counter.scss';
import { Form, Row, FormGroup, Col, Label, Legend, Input, Button } from 'reactstrap';
import { Helmet } from 'react-helmet';
import { DatePicker } from 'reactstrap-date-picker';



export function Counter() {
    const stateRef = useRef();
    const [state, setState] = useState({

         /*Housing/ Property Provider Information

*/      companyName: '',
        agentFirstname: '',
        agentLastname: '',
        housingProviderEmail: '',
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

    });



    /* const handleUpload = () => {
         // Logic to handle file upload for each state variable
         console.log('File 1:', file1);
         console.log('File 2:', file2);
     };*/
    const handleChange = useCallback((e) => {
        e.preventDefault();
        if (state.hasOwnProperty(e.target.name)) {
            setState((prevState) => ({
                ...prevState,
                [e.target.name]: e.target.value,
            }));
        }
    }, [state]);
    /*const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,


        });

    };*/

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
                onChange: (value) => {
                    setState((prevState) => ({
                        ...prevState,
                        bldgStateAddress: value,
                    }));
                   
                },
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

        /*const fields1 = [
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
            *//*{
                element: "street-address2",
                field: "Line2",
                mode: window.pca.fieldMode ? window.pca.fieldMode.POPULATE : null
            },*//*
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
        }*/

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
        console.log('CompanyName:', state.companyName);
        console.log('Name:', state.agentFirstname);
        console.log('LastName:', state.agentLastname);
        console.log('HousingProvider  Email:', state.housingProviderEmail);
        console.log('bldgSite:', state.bldgSite);
         console.log('bldgInfo:', state.bldgInfo);
         console.log('bldgStreet:', state.bldgStreetAddress);
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
                                name="bldgStreetAddress"
                                placeholder=""
                                type="text"
                                value={stateRef.current}
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
                        id="residentCurrentAddress"
                        name="residentCurrentAddress"
                        value={state.residentCurrentAddress}
                        placeholder="with a placeholder"
                        type="text"
                        onChange={handleChange}
                        className="inputResidentCurrentAddress"
                    />

                    <br />
                    <FormGroup row>
                        <Col md={4}>
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
                        <Col md={4}>
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

                <div>
                    <p className="applicantFormerAddress1"><strong>Former Address 1</strong></p>
                    <Input
                        id="applicantFormerAddress1"
                        name="applicantFormerAddress1"
                        value={state.applicantFormerAddress1}
                        placeholder="with a placeholder"
                        type="text"
                        onChange={handleChange}
                        className="inputapplicantFormerAddress1"
                    />
                    <br />
                    <FormGroup row>
                        <Col md={3}>
                            <Label
                                for="applicantMoveInDate1"
                            >
                                Move In Month/Year:
                            </Label>

                            <Input
                                id="applicantMoveInDate1"
                                name="applicantMoveInDate1"
                                value={state.applicantMoveInDate1}
                                placeholder="MM / YY"
                                type="text"
                                onChange={handleChange}
                                className="inputApplicantMoveInDate1"
                            />

                        </Col>
                        <Col md={3}>
                            <Label
                                for="applicantFormerMoveOutDate1"
                            >
                                Move Out  Month/Year:
                            </Label>

                            <Input
                                id="applicantFormerMoveOutDate1"
                                name="applicantFormerMoveOutDate1"
                                value={state.applicantFormerMoveOutDate1}
                                placeholder="MM / YY"
                                type="text"
                                onChange={handleChange}
                                className="inputapplicantFormerMoveOutDate1"
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
                <div>
                    <p className="applicantFormerAddress1"><strong>Former Address 2</strong></p>
                    <Input
                        id="applicantFormerAddress2"
                        name="applicantFormerAddress2"
                        value={state.applicantFormerAddress2}
                        placeholder="with a placeholder"
                        type="text"
                        onChange={handleChange}
                        className="inputapplicantFormerAddress2"
                    />
                    <br />
                    <FormGroup row>
                        <Col md={3}>
                            <Label
                                for="applicantMoveInDate2"
                            >
                                Move In Month/Year:
                            </Label>

                            <Input
                                id="applicantMoveInDate2"
                                name="applicantMoveInDate2"
                                value={state.applicantMoveInDate2}
                                placeholder="MM / YY"
                                type="text"
                                onChange={handleChange}
                                className="inputApplicantMoveInDate2"
                            />

                        </Col>
                        <Col md={3}>
                            <Label
                                for="applicantFormerMoveOutDate2"
                            >
                                Move Out  Month/Year:
                            </Label>

                            <Input
                                id="applicantFormerMoveOutDate2"
                                name="applicantFormerMoveOutDate2"
                                value={state.applicantFormerMoveOutDate2}
                                placeholder="MM / YY"
                                type="text"
                                onChange={handleChange}
                                className="inputapplicantFormerMoveOutDate2"
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

                </div>

                <div>
                    <p className="applicantFormerAddress1"><strong>Former Address 3</strong></p>
                    <Input
                        id="applicantFormerAddress3"
                        name="applicantFormerAddress3"
                        value={state.applicantFormerAddress3}
                        placeholder="with a placeholder"
                        type="text"
                        onChange={handleChange}
                        className="inputapplicantFormerAddress3"
                    />
                    <br />
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

                <br />

                <div>
                    <h4 className="infoMarkers">Part V: Document Uplaod</h4>

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


                <Button onClick={handleSubmit}>
                    Submit
                </Button>



            </Form>
            <br />

            {/*   <Helmet>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="http://ws1.postescanada-canadapost.ca/css/addresscomplete-2.30.min.css?key=bh36-eh91-an73-tb66"
                />
                <script
                    type="text/javascript"
                    src="http://ws1.postescanada-canadapost.ca/js/addresscomplete-2.30.min.js?key=bh36-eh91-an73-tb66"

                />                        
                                
            </Helmet>*/}
            {/*<div class="mail">

            
            
            
            <div>
                <div class="row no-gutter">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h4><strong>@ViewBag.Title</strong></h4>
                        <div class="clearfix_20"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left padding0">
                                <h4>Property Information</h4>
                                <div class="normal_text">Please complete the Property registration form.</div>
                                <hr class="form-pre" />
                            </div>
                        </div>
                        <div class="clearfix_15"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left">
                                <label for="P_PropertyName" class="normal_text">Property Name</label>
                                <input type="text" id="P_PropertyName" name="P_PropertyName" class="textbox" placeholder="Leave blank to use Street Address" maxlength="200" />
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left">
                                <label for="P_PropertyCode" class="normal_text">Property Code</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_PropertyCode" name="P_PropertyCode" class="textbox" placeholder="" maxlength="200" />
                                <span>Eg. 1,2,3, or any code to identify your property</span>
                            </div>
                        </div>
                        <div class="clearfix_15"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-left">
                                <label for="P_Address_Search" class="normal_text"><span>Property Address</span></label>
                                <input class="textbox" id="P_Address_Search" type="text" autocomplete="pca-override" autocorrect="off" placeholder="Start typing a street address or postal code" role="combobox" aria-describedby="pca-country-button-help-text pca-help-text" aria-autocomplete="list" aria-expanded="false" />
                            </div>
                        </div>
                        <div class="clearfix_10"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-left">
                                <label for="P_StreetNo" class="normal_text">Street No.</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_StreetNo" name="P_StreetNo" class="textbox" placeholder="" maxlength="50" />
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left">
                                <label for="P_Street" class="normal_text">Street Name</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_Street" name="P_Street" class="textbox" placeholder="" maxlength="100" />
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-left">
                                <label for="P_Unit" class="normal_text">Unit</label>
                                <input type="text" id="P_Unit" name="P_Unit" class="textbox" placeholder="" maxlength="50" />
                            </div>
                        </div>
                        <div class="clearfix_10"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-left">
                                <label for="P_City" class="normal_text">City</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_City" name="P_City" class="textbox" placeholder="" maxlength="50" />
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left">
                                <label for="P_Province" class="normal_text">Province</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_Province" name="P_Province" class="textbox" placeholder="" maxlength="50" />
                            </div>
                        </div>
                        <div class="clearfix_10"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 text-left">
                                <label for="P_PostalCode" class="normal_text">Postal Code</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_PostalCode" name="P_PostalCode" class="textbox" placeholder="" maxlength="50" />
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-left">
                                <label for="P_Country" class="normal_text">Country</label>
                                <input class="textbox" type="text" id="P_Country" value="Canada" />
                            </div>
                        </div>
                        <div class="clearfix_15"></div>
                        <div class="row no-gutter">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-left">
                                <label for="P_PostalCode" class="normal_text">Number of Units in this Property</label>
                                <span class="text-danger"></span>
                                <input type="text" id="P_NumOfUnits" name="P_NumOfUnits" class="textbox" placeholder="" maxlength="10" value="1" />
                            </div>
                        </div>
                        <div class="clearfix_40"></div>
                    </div>
                </div>
                </div>
               
        
        </div>*/}


        </div>

    );
}

