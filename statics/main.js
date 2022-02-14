function round_to_n(x, n) {
            if (isNaN(x) || isNaN(n)) return false;
            var m = Math.pow(10, n);
            return Math.round(x * m) / m;
        }

        function calculate_bmr() {
            let weight = document.getElementById("weight").value;
            let height = document.getElementById("height").value;
            let age = document.getElementById("age").value;
            let result = document.getElementById("result_bmr");
            result.style.display = "block";

            if (age == "" || height == "" || weight == "") {
                result.innerHTML = "<strong>لطفا همه فیلد ها را پر کنید</strong>";
                return;
            }

            let BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age);
            BMR = round_to_n(BMR, 2);

            result.innerHTML = "میزان کالری مورد نیاز شما: <br>" + BMR + " کالری خام";
        };

        function calculate_calories() {
            let execrise_amount = document.getElementById("execrise").value;
            let bmr = document.getElementById("bmr").value;
            let result = document.getElementById("result_calories");
            result.style.display = "block";

            if (bmr == "" || execrise_amount == "") {
                result.innerHTML = "<strong>لطفا همه فیلد ها را پر کنید</strong>";
                return;
            }

            let calories = bmr * execrise_amount;
            calories = round_to_n(calories, 2);

            result.innerHTML = "میزان کالری مورد نیاز شما: <br>" + calories + " کالری";
        };

        function calculate_heartbeat() {
            let age = document.getElementById("age_heartbeat").value;
            let ave = document.getElementById("ave_heartbeat").value;
            let execrise_heartbeat = document.getElementById("execrise_heartbeat").value;

            let result = document.getElementById("result_heartbeat");
            result.style.display = "block";

            if (age == "" || ave == "" || execrise_heartbeat == "") {
                result.innerHTML = "<strong>لطفا همه فیلد ها را پر کنید</strong>";
                return;
            }

            execrise_heartbeat /= 100;
            let max_heartbeat = 220 - age;
            let X = (max_heartbeat - ave) * execrise_heartbeat;
            let reqired_heartbeat = X + ave;

            result.innerHTML = "ضربان قلب مورد نیاز شما برای تمرین: " + reqired_heartbeat + " ضربان قلب <br>حداکثر ضربان قلب: " + max_heartbeat + " ضربان قلب";
        }

        function calculate_bmi() {
            let weight = document.getElementById("bmi_weight").value;
            let height = document.getElementById("bmi_height").value;
            height /= 100;
            let result = document.getElementById("bmi_results");
            result.style.display = "block";

            if (weight == "" || height == "") {
                result.innerHTML = "<strong>لطفا همه فیلد ها را پر کنید</strong>";
                return;
            }

            let bmi = weight / (height * height);
            bmi = round_to_n(bmi, 2);
            result.innerHTML = "شاخص توده بدنی: " + bmi;
        }
        
        function calculate_height_pred() {
            let mother_height = document.getElementById("height_pred_mother").value;
            let father_height = document.getElementById("height_pred_father").value;
            let gender = document.getElementById("height_pred_gender").value;
            let result = document.getElementById("height_pred_results");
            result.style.display = "block";

            if (mother_height == "" || father_height == "") {
                result.innerHTML = "<strong>لطفا همه فیلد ها را پر کنید</strong>";
                return;
            }

            let predicted_height = ((parseFloat(mother_height) + parseFloat(father_height)) / 2) + parseFloat(gender);

            result.innerHTML = "میزان قد پیش بینی شده به سانتی متر: " + Math.floor(predicted_height);
        }
