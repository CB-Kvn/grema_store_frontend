import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from "@heroicons/react/24/outline";


export const InfoBanner = () => {
  const features = [
    {
      name: "100 % artesanal",
      description:
        "Se caracterizan por la creatividad y se ajustan a mercados pequeños. Y pueden llegar a necesitar de un mayor tiempo de elaboración",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Piezas originales y customizables",
      description:
        "Las piezas elaboradas son únicas con valor histórico, cultural o utilitario",
      icon: LockClosedIcon,
    },
    {
      name: "Empresa 100% nacional",
      description:
        "Producto elaborado por artesanas de la zona de Paquera en la provincia de Puntarenas, Costa Rica",
      icon: ArrowPathIcon,
    },
    {
      name: "Servicio personalizado y agil ",
      description:
        "La empresa se caracteiza por el buen servicio al cliente para satisfacer las necesidades de estos",
      icon: FingerPrintIcon,
    },
  ];

  return (
    <>
      <div className="bg-white my-20 py-24 sm:py-14" id="about-us">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">

            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl text-footer" style={{fontFamily:'Dancing Script,cursive'}}>
              Por que comprar en  Grema Store?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-font-nav">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-nav">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
