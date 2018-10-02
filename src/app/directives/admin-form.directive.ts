import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAdminForm]'
})
export class AdminFormDirective {
  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.handleInputs();
    this.handleCheckboxs();
    this.handleWizards();
  }

  handleInputs() {

    const form = <HTMLInputElement>this.el.nativeElement;
    let formControlsList;

    if (form.classList.contains('form-type-material')) {

      formControlsList = form.querySelectorAll('.form-control:not(.bootstrap-select)');

      formControlsList.forEach((input: HTMLInputElement) => {

        input.addEventListener('focus', function () {
          this.parentElement.classList.add('do-float');
        });

        input.addEventListener('focusout', function () {
          if (!input.value) {
            this.parentElement.classList.remove('do-float');
          }
        });

      });
    }
  }

  handleCheckboxs() {
    const form = this.el.nativeElement;

    const parentCheckboxesList = form.querySelectorAll('.custom-checkbox');

    parentCheckboxesList.forEach((parentCheckbox: HTMLInputElement) => {

      parentCheckbox.addEventListener('click', function () {
        const input = <HTMLInputElement>this.querySelector('.custom-control-input:not([disabled])');
        input.checked = !input.checked;
        input.dispatchEvent(new Event('change'));
      });

    });
  }

  handleWizards() {
    const form = <HTMLInputElement>this.el.nativeElement;

    if (form.hasAttribute('wizard')) {

      var selectedTabPosition = 0;
      var btnNext = form.querySelector('[wizard-toggle="next"]');
      var btnPrev = form.querySelector('[wizard-toggle="prev"]');
      var btnFini = form.querySelector('[wizard-toggle="finish"]');
      var tabs = <any>form.querySelectorAll('[wizard-nav]');

      //resetando o wizard
      for (var tab of tabs) {
        tab.classList.remove("complete");
        tab.classList.remove("processing");
        var tabContentRef = form.querySelector(tab.querySelector("[wizard-ref]").getAttribute("wizard-ref"));

        tabContentRef.classList.remove("active");
        tabContentRef.classList.remove("show");
      }

      //default nav
      tabs[selectedTabPosition].classList.add("processing");
      var tabContentRef = form.querySelector(tabs[selectedTabPosition].querySelector("[wizard-ref]").getAttribute("wizard-ref"));
      tabContentRef.classList.add("active");
      tabContentRef.classList.add("show");

      btnNext.addEventListener('click', () => {

        if (selectedTabPosition < tabs.length - 1) {

           //Faz com que a tab atual passe a estar completa 
          tabs[selectedTabPosition].classList.remove("processing");
          tabs[selectedTabPosition].classList.add("complete");

          //esconde o conteudo da tab completa
          var tabContentRef = form.querySelector(tabs[selectedTabPosition].querySelector("[wizard-ref]").getAttribute("wizard-ref"));
          tabContentRef.classList.remove("active");
          tabContentRef.classList.remove("show");

          //Avança para proxima tab
          selectedTabPosition += 1;
          
          //Coloca ela como em progresso
          tabs[selectedTabPosition].classList.add("processing");
          //coloca o conteudo dela ativo
          tabContentRef = form.querySelector(tabs[selectedTabPosition].querySelector("[wizard-ref]").getAttribute("wizard-ref"));
          tabContentRef.classList.add("active");
          tabContentRef.classList.add("show");

          //esconde o botão de prosseguir e mostrar o de finalizar
          if(selectedTabPosition == tabs.length - 1){
            btnNext.classList.add("d-none");
            btnFini.classList.remove("d-none");
          }
        }

      });


      btnPrev.addEventListener('click', () => {

        if (selectedTabPosition > 0) {

          //esconde o botão de finalizar e mostrar o de prosseguir
          if(selectedTabPosition == tabs.length - 1){
            btnNext.classList.remove("d-none");
            btnFini.classList.add("d-none");
          }

           //remove as classes de complete e processing da tab atual
          tabs[selectedTabPosition].classList.remove("complete");
          tabs[selectedTabPosition].classList.remove("processing");

          //esconde o conteudo da tab atual
          var tabContentRef = form.querySelector(tabs[selectedTabPosition].querySelector("[wizard-ref]").getAttribute("wizard-ref"));
          tabContentRef.classList.remove("active");
          tabContentRef.classList.remove("show");

          //Volta para tab anterior
          selectedTabPosition -= 1;
          
          //Coloca ela como em progresso
          tabs[selectedTabPosition].classList.add("processing");
          //coloca o conteudo dela ativo
          tabContentRef = form.querySelector(tabs[selectedTabPosition].querySelector("[wizard-ref]").getAttribute("wizard-ref"));
          tabContentRef.classList.add("active");
          tabContentRef.classList.add("show");
        }

      });

    }
  }
}
