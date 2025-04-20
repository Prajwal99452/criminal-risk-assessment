import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">Criminal Risk Assessment XLSForm</h1>
        </div>

        <div className="p-8">
          <p className="text-gray-700 mb-6 text-lg">
            This is an enhanced, colorful ODK XLSForm for Criminal Risk Assessment requests, based on the Manitoba
            Families form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500 shadow-sm">
              <h3 className="font-semibold text-green-800 text-lg mb-2">Personal Information</h3>
              <p className="text-green-700">
                Collects names, date of birth, gender, contact details and identification information.
              </p>
            </div>

            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500 shadow-sm">
              <h3 className="font-semibold text-blue-800 text-lg mb-2">Consent Section</h3>
              <p className="text-blue-700">Records consent for criminal risk assessment and release of information.</p>
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500 shadow-sm">
              <h3 className="font-semibold text-amber-800 text-lg mb-2">Agency Information</h3>
              <p className="text-amber-700">Captures details about the requesting agency and assigned workers.</p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500 shadow-sm">
              <h3 className="font-semibold text-purple-800 text-lg mb-2">Assessment Reasons</h3>
              <p className="text-purple-700">Documents the purpose and justification for the risk assessment.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-md mb-8 text-center">
            <h3 className="font-bold text-white text-xl mb-3">Download XLSForm</h3>
            <p className="text-white mb-4">
              Click the button below to download the colorful XLSForm for Criminal Risk Assessment.
            </p>
            <Link
              href="/api/download-xlsform"
              className="inline-block bg-white text-purple-700 font-medium py-3 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            >
              Download XLSForm
            </Link>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 text-lg mb-2">Testing Your Form</h3>
            <p className="text-gray-700 mb-3">You can test this form using the ODK XLSForm Online tool:</p>
            <a
              href="https://getodk.org/xlsform/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline flex items-center"
            >
              <span>https://getodk.org/xlsform/</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
