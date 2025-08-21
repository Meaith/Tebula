 
    // Handle form submission
    document.getElementById('checkout-form').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Payment submitted! (This is a demo form.)');
    });

    // Get plan from URL if present
    const params = new URLSearchParams(window.location.search);
    const selectedPlan = params.get('plan');
    // const selectedTime = params.get('time');
    if (selectedPlan) {
      const planDropdown = document.getElementById('plan');
      const optionToSelect = Array.from(planDropdown.options).find(
        option => option.value === selectedPlan
      );
      if (optionToSelect) {
        planDropdown.value = selectedPlan;
      }
    }