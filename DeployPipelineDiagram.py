# deploy_arch_diagram.py
# Generates an architecture diagram (diagrams library) for "on-demand container deploy from portfolio"
# Run: python deploy_arch_diagram.py
# Requires: diagrams (pip install diagrams) and Graphviz installed on your system.

from diagrams import Diagram, Cluster, Edge
from diagrams.onprem.client import User
from diagrams.generic.blank import Blank
from diagrams.gcp.compute import Run, Functions
from diagrams.gcp.devtools import ContainerRegistry, Scheduler

# Small, clear diagram (landscape)
with Diagram("Portfolio On-Demand Container Deploy", filename="portfolio_deploy_arch", show=False, direction="LR"):

    user = User("Visitor\n(browser)")

    # Edge nodes representing the static site (Firebase Hosting) and client behavior
    hosting = Blank("Firebase Hosting\n(static portfolio)")

    # Serverless API that receives "deploy" clicks
    functions = Functions("Deploy API\n(Firebase Function)")

    # Container images store
    registry = ContainerRegistry("Container Images\n(Artifact Registry / GCR)")

    # Runtime: Cloud Run where per-click services/tasks are created
    # represent as a cluster of ephemeral services
    with Cluster("Execution Plane\n(Google Cloud Run)"):
        # show example of many ephemeral services
        run_service_template = Run("Demo Service\n(per-project container)\n(spawn per-click)")
        # controller / autoscaler / ingress (represented as Blank node)
        ingress = Blank("Temporary URL / HTTPS Load Balancer")

    # Supporting systems: tracking and cleanup
    datastore = Blank("Deployment Tracker\n(Firestore / Realtime DB)")
    scheduler = Blank("Cleaner / TTL Cron\n(Cloud Scheduler)")

    # User flow: click -> API -> create service -> return URL -> open new tab
    user >> Edge(label="click Deploy") >> hosting >> Edge(label="calls API") >> functions
    functions >> Edge(label="pull image & create service") >> registry
    functions >> Edge(label="create Cloud Run service") >> run_service_template
    run_service_template >> Edge(label="expose") >> ingress
    functions >> Edge(label="record deployment") >> datastore
    scheduler >> Edge(label="delete old services") >> run_service_template
    scheduler >> Edge(label="cleanup records") >> datastore

    # UX: API returns URL to frontend which opens a new tab
    functions >> Edge(label="returns demo URL") >> hosting
    user >> Edge(label="new tab -> demo URL") >> ingress
