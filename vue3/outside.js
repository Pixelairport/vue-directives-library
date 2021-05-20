export const outside = {

    created(el, binding, vnode) {
        el.outsideEvent = function (event) {

            const {exclude, handler} = binding.value;
            let bClickOnExcluded = false;

            // Check for excluded elements
            if (exclude) {
                exclude.forEach(excludedEl => {

                    if (!bClickOnExcluded) {

                        // Get the type for excluded element (ref, class or id)
                        let excludedElType = 'ref';

                        if(excludedEl.substring(0, 1)==='.'){
                            excludedElType = 'class';
                        }

                        if(excludedEl.substring(0, 1)==='#'){
                            excludedElType = 'id';
                        }

                        // Check if excluded "ref" is clicked
                        if(excludedElType==='ref'){
                            const excludedRefs = vnode.context.$refs[excludedEl];
                            bClickOnExcluded = excludedRefs.contains(event.target);
                        }

                        // Check if excluded "class" is clicked
                        if(excludedElType==='class'){
                            let sClass = excludedEl.substring(1);

                            if(event.target.classList.contains(sClass)){
                                bClickOnExcluded = true;
                            }
                        }

                        // Check if excluded "id" is clicked
                        if(excludedElType==='id'){
                            let sId = excludedEl.substring(1);

                            if(event.target.id === sId){
                                bClickOnExcluded = true;
                            }
                        }
                    }
                })
            }

            if (bClickOnExcluded === false) {
                if (!el.contains(event.target) && el !== event.target) {
                    // Call method by handler name
                    binding.instance[handler](event);
                }
            }

        };

        document.body.addEventListener(binding.arg, el.outsideEvent);
    }

}
