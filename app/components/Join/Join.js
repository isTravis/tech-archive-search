import React from 'react';

const Join = function() {
	return (
		<div className={'join-page'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<h1>Add Your Organization</h1>
						<p>Here we add content inviting organizations to join.</p>
						<p>To begin the process, please contact us using the form below. We ask for a primary contact. We will supply a username and password to this user which will enable them to transfer files via SFTP into the system.</p>
						<p>Outline metadata standards.</p>
					</div>
				</div>

				<div className={'row'}>
					<div className={'col-12'}>
						<h2>Connect using SFTP</h2>
						<p>For the sake of demonstration - these credentials are active. Feel free to play around. If we notice any abuse, we can spin down our development server and use more legitimate credentials.</p>
						<pre><b>Host</b>: 35.165.203.247</pre>
						<pre><b>Port</b>: 2222</pre>
						<pre><b>Protocol</b>: SFTP</pre>
						<pre><b>User</b>: cisco</pre>
						<pre><b>Password</b>: password</pre>
						<p>Files that are uploaded will have their metadata parsed and will be available for the search tools. There may be a slight delay while parsing and caching take place.</p>
					</div>
				</div>

				<div className={'row'}>
					<div className={'col-12'}>
						<h2>Notes</h2>
						<p>The system can fire a webhook anytime a new file is added. If you provide a URL to call - we will send a GET request to that URL with details of the newly added file for you to process.</p>
						<p>The contents of your FTP directory are not permanant - deleting items from the FTP server may not necessarily delete the item from the archive.</p>
						<p>We will provide a sandbox that allows each user account to view all of their uploaded files. Files will go to a pending state before being finally added into the archive. This pending state will allow for missing metadata, etc to be validated - and for a final check of content to be made.</p>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Join;
